import { defaultColors, type Colors } from "./colors"
import { defaultIcons, type Icons } from "./icons"
import { createSubscriber, MediaQuery } from "svelte/reactivity"
import { on } from "svelte/events"

export type Theme = 'light' | 'dark' | 'system'

export const themes: Theme[] = ['light', 'dark', 'system']

export interface Labels {
  light: string
  dark: string
  system: string
}

export const defaultLabels = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}

export interface Config {
  key: string
  colors: Colors
  icons: Icons
  labels: Labels
}

class ThemeState {
	#override = $state<Theme>('system')
	#system: Theme
	#value: Theme
	#subscribe: VoidFunction
	#update?: VoidFunction

	colors = defaultColors
	icons = defaultIcons
	labels = defaultLabels

	constructor() {
		const prefersDark = new MediaQuery('(prefers-color-scheme: dark)')
		this.#system = $derived(prefersDark.current ? 'dark' : 'light')
		this.#value = $derived(this.#override === 'system' ? this.#system : this.#override)

		this.#subscribe = createSubscriber(update => {
			this.#update = update
			const saved: Theme = localStorage.theme ?? 'system'
			this.#override = saved
			update()

			return on(window, 'storage', (event: StorageEvent) => {
				if (event.key === 'theme') {
					this.#override = event.newValue as Theme
					update()
				}
			})
		})

		$effect.root(() => {
			$effect.pre(() => {
				document.documentElement.classList.toggle('dark', this.#value === 'dark')
			})
		})
	}

	get system() {
		return this.#system
	}

	get override() {
		this.#subscribe()
		return this.#override
	}

	get current() {
		this.#subscribe()
		return this.#value
	}

	set current(value: Theme) {
		switch (value) {
			case 'dark':
			case 'light':
				localStorage.setItem('theme', value)
				break
			case 'system':
				localStorage.removeItem('theme')
				break
		}
		this.#override = value
		this.#update?.()
	}
}

export const theme = new ThemeState()
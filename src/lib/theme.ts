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
	#system = new MediaQuery('(prefers-color-scheme: dark)')
	#override: Theme = 'system'
	#subscribe: VoidFunction
	#update?: VoidFunction

	colors = defaultColors
	icons = defaultIcons
	labels = defaultLabels

	constructor() {
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
	}

	get system() {
		this.#subscribe()
		return this.#system.current
	}

	get override() {
		this.#subscribe()
		return this.#override
	}

	get current() {
		this.#subscribe()
		switch (this.#override) {
			case 'dark':
			case 'light':
				return this.#override
			case 'system':
				return this.#system.current ? 'dark' : 'light'
		}
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
		document.documentElement.classList.toggle('dark', this.current === 'dark')
	}
}

export const theme = new ThemeState()
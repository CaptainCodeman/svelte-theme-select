import { defaultColors, type Colors } from "./colors"
import { defaultIcons, type Icons } from "./icons"
import { MediaQuery } from "svelte/reactivity"
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
	#mq = new MediaQuery('(prefers-color-scheme: dark)')
	#system = $derived<Theme>(this.#mq.current ? 'dark' : 'light')
	#override = $state<Theme>('system')
	#value = $derived(this.#override === 'system' ? this.#system : this.#override)

	#subscribers = 0
	#off?: VoidFunction

	colors = defaultColors
	icons = defaultIcons
	labels = defaultLabels

	private subscribe() {
		if ($effect.tracking()) {
			$effect(() => {
				if (this.#subscribers === 0) {
					const saved: Theme = localStorage.theme ?? 'system'
					this.#override = saved

					this.#off = on(window, 'storage', (event: StorageEvent) => {
						if (event.key === 'theme') {
							this.#override = event.newValue as Theme
						}
					})

					$effect(() => {
						document.documentElement.classList.toggle('dark', this.#value === 'dark')
					})
				}

				this.#subscribers++

				return () => {
					this.#subscribers--
					if (this.#subscribers === 0) {
						this.#off?.()
						this.#off = undefined
					}
				}
			})
		}
	}

	get system() {
		this.subscribe()
		return this.#system
	}

	get override() {
		this.subscribe()
		return this.#override
	}

	get current() {
		this.subscribe()
		return this.#value
	}

	set current(value: Theme) {
		this.subscribe()
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
	}
}

export const theme = new ThemeState()
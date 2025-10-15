import { MediaQuery } from "svelte/reactivity"
import { on } from "svelte/events"
import { BROWSER } from "esm-env"

export const Theme = ['light', 'dark', 'system'] as const
export type Theme = (typeof Theme)[number]

class ThemeState {
	#mq = new MediaQuery('(prefers-color-scheme: dark)')
	#system = $derived<Theme>(this.#mq.current ? 'dark' : 'light')
	#override = $state<Theme>('system')
	#value = $derived(this.#override === 'system' ? this.#system : this.#override)

	#subscribers = 0
	#off?: VoidFunction

	constructor() {
		if (BROWSER) {
			const saved: Theme = localStorage.theme ?? 'system'
			this.#override = saved
		}
	}

	private subscribe() {
		if ($effect.tracking()) {
			$effect(() => {
				if (this.#subscribers === 0) {
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

	set override(value: Theme) {
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

	get current() {
		this.subscribe()
		return this.#value
	}
}

export const theme = new ThemeState()
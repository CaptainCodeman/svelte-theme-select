<script lang="ts">
	import { onMount } from 'svelte'
	import { getThemeStore } from './context'

	const theme = getThemeStore()

	// NOTE: this is the same script that is written into the page head to set the initial mode
	const applyTheme = () =>
		document.documentElement.classList.toggle(
			'dark',
			localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		)

	// set theme if storage changes (could be from a different tab)
	function onStorage() {
		theme.setTheme(localStorage.theme || 'system')
	}

	// persist and apply the theme on change
	function onTheme(value: string) {
		switch (value) {
			case 'light':
			case 'dark':
				localStorage.setItem('theme', value)
				break
			case 'system':
				localStorage.removeItem('theme')
				break
		}

		applyTheme()
	}

	onMount(() => {
		const mediaQuery = matchMedia('(prefers-color-scheme: dark)')
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', applyTheme)
		} else {
			mediaQuery.addListener(applyTheme)
		}

		addEventListener('storage', onStorage)
		const unsubscribe = theme.subscribe(onTheme)

		// this will _usually_ just stay mounted, but meh ... good practice to show best practices
		return () => {
			if (mediaQuery.removeEventListener) {
				mediaQuery.removeEventListener('change', applyTheme)
			} else {
				mediaQuery.removeListener(applyTheme)
			}

			removeEventListener('storage', onStorage)
			unsubscribe()
		}
	})
</script>

<!-- this sets initial dark mode class based on user preference / device settings (in head to avoid FOUC) -->
<svelte:head>
	<script>document.documentElement.classList.toggle("dark", localStorage.theme === "dark" || !localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)</script>
</svelte:head>

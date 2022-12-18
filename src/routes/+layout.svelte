<script>
	import '../app.postcss'

	import { Theme, ThemeToggle, ThemeSelect } from '$lib'
	import { defaultIcons } from '$lib/icon'
	import { createThemeSwitcher } from '$lib/theme'

	const theme = createThemeSwitcher({
		icons: defaultIcons,
		labels: {
			light: 'Light',
			dark: 'Dark',
			system: 'System',
		},
	})
</script>

<div class="max-w-4xl mx-auto px-4 py-4 dark:text-gray-100">
	<nav class="flex justify-between">
		<ThemeToggle {theme} />
	</nav>

	<main class="m-8 w-[700px]">
		<p>Theme: {$theme}</p>
		<ThemeSelect {theme} />
		<slot />
	</main>
</div>

<Theme {theme} />

<style global type="postcss">
	body {
		@apply bg-neutral-50 dark:bg-neutral-900;
	}
</style>

<script>
	import '../app.postcss'

	import { Theme, ThemeToggle, ThemeSelect } from '$lib'
	import { createThemeSwitcher } from '$lib/theme'

	const theme = createThemeSwitcher()
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
		@apply bg-slate-100 dark:bg-slate-900;
	}
</style>

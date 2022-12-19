<script lang="ts" context="module">
	import { createThemeSwitcher } from '$lib'
	import { Theme } from '$lib'
	import '../app.postcss'

	export const theme = createThemeSwitcher()
</script>

<slot />

<Theme {theme} />

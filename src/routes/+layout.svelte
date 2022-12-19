<script lang="ts">
	import { createThemeSwitcher, Theme } from '$lib'
	import '../app.postcss'

	createThemeSwitcher()
</script>

<slot />

<Theme />

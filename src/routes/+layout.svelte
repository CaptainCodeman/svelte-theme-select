<script lang="ts">
	import { Theme } from 'svelte-theme-select'
	import type { Snippet } from 'svelte'
	import '../app.css'

	interface Props {
		children?: Snippet
	}

	let { children }: Props = $props()
</script>

{@render children?.()}

<Theme />

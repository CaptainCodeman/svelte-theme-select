<script lang="ts">
	import { theme } from './state.svelte'
</script>

<span class="size-6" hidden={theme.override === 'system'}>
	<span class="dark:hidden inline">{@html theme.icons.light(true)}</span>
	<span class="hidden dark:inline">{@html theme.icons.dark(true)}</span>
</span>
<span class="size-6" hidden={theme.override !== 'system'}>
	<span class="dark:hidden inline">{@html theme.icons.light(false)}</span>
	<span class="hidden dark:inline">{@html theme.icons.dark(false)}</span>
</span>
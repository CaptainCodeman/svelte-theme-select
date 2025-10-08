<script lang="ts">
	import { browser } from '$app/environment'
	import Icon from './Icon.svelte'
	import { theme, themes, type Theme } from './state.svelte'

	function onChange(e: Event) {
		const el = e.target as HTMLSelectElement
		const value = el.value as Theme
		theme.current = value
	}
</script>

<div class="flex items-center justify-between">
	<label for="theme" class="font-normal {theme.colors.selectLabel}">Switch theme</label>
	<div class="relative flex items-center gap-2 font-semibold {theme.colors.selectButton} {browser ? 'opacity-100' : 'opacity-0'}">
		<Icon />
		{theme.labels[theme.override]}
		<svg class="size-6 {theme.colors.selectIcon}" fill="none">
			<path d="m15 11-3 3-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<select value={theme.override} onchange={onChange} class="absolute appearance-none inset-0 w-full h-full opacity-0">
			{#each themes as value}
				<option {value}>
					{theme.labels[value]}
				</option>
			{/each}
		</select>
	</div>
</div>

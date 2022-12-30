<script lang="ts">
	import { getThemeStore } from './context'
	import { themes, type Theme } from './theme'

	const theme = getThemeStore()

	function onChange(e: Event) {
		const el = e.target as HTMLSelectElement
		const value = el.value as Theme
		theme.setTheme(value)
	}
</script>

<div class="flex items-center justify-between">
	<label for="theme" class="font-normal {theme.colors.selectLabel}">Switch theme</label>
	<div class="relative flex items-center font-semibold {theme.colors.selectButton}">
		<span class="w-6 h-6 mr-2 dark:hidden inline">{@html theme.icons.light(false)}</span>
		<span class="w-6 h-6 mr-2 hidden dark:inline">{@html theme.icons.dark(false)}</span>
		{theme.labels[$theme]}
		<svg class="w-6 h-6 ml-2 {theme.colors.selectIcon}" fill="none">
			<path d="m15 11-3 3-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<select value={$theme} on:change={onChange} class="absolute appearance-none inset-0 w-full h-full opacity-0">
			{#each themes as value}
				<option {value}>
					{theme.labels[value]}
				</option>
			{/each}
		</select>
	</div>
</div>

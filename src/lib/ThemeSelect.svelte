<script lang="ts">
	import { BROWSER } from 'esm-env'
	import type { Snippet } from 'svelte'
	import { theme, Theme } from './state.svelte'
	import { defaultIcons } from './Theme.svelte'

	interface Props {
		selectLabel?: string
		selectButton?: string
		selectIcon?: string
		labels?: Record<Theme, string>
		icons?: Snippet<[Theme, boolean]>
	}

	let {
		selectLabel = 'text-slate-700 dark:text-slate-500',
		selectButton = 'ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700  bg-white dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200',
		selectIcon = 'text-slate-400',
		labels = {
			light: 'Light',
			dark: 'Dark',
			system: 'System',
		},
		icons = defaultIcons,
	}: Props = $props()

	function onChange(e: Event) {
		const el = e.target as HTMLSelectElement
		const value = el.value as Theme
		theme.override = value
	}
</script>

<div class="flex items-center justify-between">
	<label for="theme" class="font-normal {selectLabel}">Switch theme</label>
	<div class="relative flex items-center gap-2 font-semibold {selectButton} {BROWSER ? 'opacity-100' : 'opacity-0'}">
		<span class="size-6" hidden={theme.override === 'system'}>
			<span class="dark:hidden inline">{@render icons('light', true)}</span>
			<span class="hidden dark:inline">{@render icons('dark', true)}</span>
		</span>
		<span class="size-6" hidden={theme.override !== 'system'}>
			<span class="dark:hidden inline">{@render icons('light', false)}</span>
			<span class="hidden dark:inline">{@render icons('dark', false)}</span>
		</span>
		{labels[theme.override]}
		<svg class="size-6 {selectIcon}" fill="none">
			<path d="m15 11-3 3-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		<select value={theme.override} onchange={onChange} class="absolute appearance-none inset-0 w-full h-full opacity-0">
			{#each Theme as value}
				<option {value}>
					{labels[value]}
				</option>
			{/each}
		</select>
	</div>
</div>

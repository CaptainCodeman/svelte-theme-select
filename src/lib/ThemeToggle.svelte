<script lang="ts">
	import type { Snippet } from 'svelte'
	import Transition from 'svelte-transition'
	import { createMenu } from 'svelte-headlessui'
	import { theme, Theme } from './state.svelte'
	import { defaultIcons } from './Theme.svelte'

	interface Props {
		dropdownList?: string
		dropdownHover?: string
		textActive?: string
		labels?: Record<Theme, string>
		icons?: Snippet<[Theme, boolean]>
	}

	let {
		dropdownList = 'text-slate-700 bg-white ring-1 ring-black/5 dark:bg-slate-700 dark:ring-0 dark:highlight-white/5 dark:text-slate-300',
		dropdownHover = 'hover:bg-slate-50 hover:dark:bg-slate-800/50',
		textActive = 'text-sky-500',
		labels = {
			light: 'Light',
			dark: 'Dark',
			system: 'System',
		},
		icons = defaultIcons,
	}: Props = $props()

	const menu = createMenu({ label: 'Theme' })

	// wait until the popup has closed before applying the selected setting
	// this is to prevent the drop down style changing as it disappears
	let pending: Theme | undefined = undefined

	function change(event: Event) {
		const { detail } = event as CustomEvent<{ selected: Theme }>
		const { selected } = detail
		if (selected) {
			pending = selected
			menu.close()
		}
	}

	function closed() {
		// apply any pending setting once closed
		if (pending) {
			theme.override = pending
			pending = undefined
		}
	}
</script>

<div class="relative inline-block">
	<button class="w-6 h-6 leading-none" use:menu.button onchange={change}>
		<span class="size-6" hidden={theme.override === 'system'}>
			<span class="dark:hidden inline">{@render icons('light', true)}</span>
			<span class="hidden dark:inline">{@render icons('dark', true)}</span>
		</span>
		<span class="size-6" hidden={theme.override !== 'system'}>
			<span class="dark:hidden inline">{@render icons('light', false)}</span>
			<span class="hidden dark:inline">{@render icons('dark', false)}</span>
		</span>
	</button>

	<Transition
		show={$menu.expanded}
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
		on:after-leave={closed}
	>
		<ul class="origin-top-right absolute right-0 py-1 mt-2 w-28 rounded-md shadow-lg focus:outline-none {dropdownList}" use:menu.items>
			{#each Theme as value}
				{@const active = value === theme.override}
				<li
					class="flex items-center px-2 py-1 text-sm font-semibold cursor-pointer {dropdownHover} {active ? textActive : ''}"
					use:menu.item={{ value }}
				>
					<span class="w-6 h-6 mr-2" hidden={!active}>{@render icons(value, true)}</span>
					<span class="w-6 h-6 mr-2" hidden={active}>{@render icons(value, false)}</span>
					{labels[value]}
				</li>
			{/each}
		</ul>
	</Transition>
</div>

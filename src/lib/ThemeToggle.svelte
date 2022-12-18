<script lang="ts">
	import Transition from 'svelte-transition'
	import { createMenu } from 'svelte-headlessui'
	import { themes, type ThemeStore, type Theme } from './theme'

	export let theme: ThemeStore

	let menu = createMenu({ label: 'Theme' })

	// wait until the popup has closed before applying the selected setting
	// this is to prevent the drop down style changing as it disappears
	let pending: Theme | undefined = undefined

	function select(event: Event) {
		const { detail } = event as CustomEvent
		const { selected } = detail
		pending = selected
	}

	function closed() {
		// apply any pending setting once closed
		if (pending) {
			theme.setTheme(pending)
			pending = undefined
		}
	}
</script>

<div class="relative inline-block">
	<button class="w-6 h-6 leading-none" on:select={select} use:menu.button>
		{@html theme.icons.light($theme !== 'system', 'dark:hidden inline')}
		{@html theme.icons.dark($theme !== 'system', 'hidden dark:inline')}
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
		<ul
			class="origin-top-right absolute right-0 py-1 mt-2 w-28 rounded-md shadow-lg text-neutral-700 bg-white ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 dark:ring-0 dark:highlight-white/5 dark:text-neutral-300 focus:outline-none"
			use:menu.items
		>
			{#each themes as value}
				{@const selected = value === $theme}
				<li
					class="flex items-center px-2 py-1 text-sm font-semibold cursor-pointer hover:bg-neutral-50 hover:dark:bg-neutral-600/30"
					class:text-sky-500={selected}
					use:menu.item={{ value }}
				>
					{@html theme.icons[value](selected, 'w-6 h-6 mr-2')}
					{theme.labels[value]}
				</li>
			{/each}
		</ul>
	</Transition>
</div>

<script lang="ts">
	import Transition from 'svelte-transition'
	import { createMenu } from 'svelte-headlessui'
	import { theme, themes, type Theme } from './state.svelte'
	import Icon from './Icon.svelte'

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
			theme.current = pending
			pending = undefined
		}
	}
</script>

<div class="relative inline-block">
	<button class="w-6 h-6 leading-none" use:menu.button onchange={change}>
		<Icon />
		<!-- <span hidden={theme.override === 'system'}>
			<span class="dark:hidden inline">{@html theme.icons.light(true)}</span>
			<span class="hidden dark:inline">{@html theme.icons.dark(true)}</span>
		</span>
		<span hidden={theme.override !== 'system'}>
			<span class="dark:hidden inline">{@html theme.icons.light(false)}</span>
			<span class="hidden dark:inline">{@html theme.icons.dark(false)}</span>
		</span> -->
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
		<ul class="origin-top-right absolute right-0 py-1 mt-2 w-28 rounded-md shadow-lg focus:outline-none {theme.colors.dropdownList}" use:menu.items>
			{#each themes as value}
				{@const active = value === theme.override}
				<li
					class="flex items-center px-2 py-1 text-sm font-semibold cursor-pointer {theme.colors.dropdownHover} {active
						? theme.colors.textActive
						: ''}"
					use:menu.item={{ value }}
				>
					<span class="w-6 h-6 mr-2" hidden={!active}>{@html theme.icons[value](true)}</span>
					<span class="w-6 h-6 mr-2" hidden={active}>{@html theme.icons[value](false)}</span>
					{theme.labels[value]}
				</li>
			{/each}
		</ul>
	</Transition>
</div>

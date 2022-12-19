<script>
	import { ThemeToggle, ThemeSelect } from '$lib'
	import { theme } from './+layout.svelte'
</script>

<h1 class="m-8 font-bold text-3xl tracking-tighter text-slate-700 dark:text-slate-300">svelte-theme-select</h1>

<h2 class="m-8 font-bold text-xl tracking-tighter text-slate-600 dark:text-slate-400">Desktop Toolbar Style</h2>

<div class="border border-slate-300 dark:border-slate-700 m-8">
	<nav class="bg-white dark:bg-slate-800 shadow-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<div class="flex">
					<div class="flex flex-shrink-0 items-center">
						<img class="block w-8 h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
					</div>
					<div class="ml-6 flex space-x-8">
						<a
							href="#"
							class="border-indigo-500 text-slate-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							aria-current="page">Dashboard</a
						>

						<a
							href="#"
							class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:hover:text-slate-300 dark:hover:border-slate-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>Team</a
						>

						<a
							href="#"
							class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:hover:text-slate-300 dark:hover:border-slate-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>Projects</a
						>
					</div>
				</div>
				<div class="ml-6 flex items-center">
					<ThemeToggle {theme} />
				</div>
			</div>
		</div>
	</nav>
</div>

<h2 class="m-8 font-bold text-xl tracking-tighter text-slate-600 dark:text-slate-400">Mobile Navigation Style</h2>

<div class="border border-slate-300 dark:border-slate-700 m-8 max-w-sm">
	<nav class="bg-white dark:bg-slate-800 shadow-sm">
		<div class="space-y-1 pt-2 pb-3">
			<a
				href="#"
				class="bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				aria-current="page">Dashboard</a
			>

			<a
				href="#"
				class="border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Team</a
			>

			<a
				href="#"
				class="border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Projects</a
			>
		</div>
		<div class="border-t border-slate-200 p-4">
			<ThemeSelect {theme} />
		</div>
	</nav>
</div>

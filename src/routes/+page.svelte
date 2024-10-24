<script>
	import { ThemeToggle, ThemeSelect } from '$lib'
</script>

<h1 class="m-8 font-bold text-3xl tracking-tighter text-slate-700 dark:text-slate-300">svelte-theme-select</h1>

<h2 class="m-8 font-bold text-xl tracking-tighter text-slate-600 dark:text-slate-400">Desktop Toolbar Style</h2>

<div class="border border-slate-300 dark:border-slate-700 m-8">
	<nav class="bg-white dark:bg-slate-800 shadow-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<div class="flex">
					<div class="flex flex-shrink-0 items-center">
						<img class="block w-8 h-8" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
					</div>
					<div class="ml-6 flex space-x-8">
						<a
							href="."
							class="border-indigo-500 text-slate-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							aria-current="page">Dashboard</a
						>

						<a
							href="."
							class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:hover:text-slate-300 dark:hover:border-slate-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>Team</a
						>

						<a
							href="."
							class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:hover:text-slate-300 dark:hover:border-slate-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>Projects</a
						>
					</div>
				</div>
				<div class="ml-6 flex items-center">
					<ThemeToggle />
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
				href="."
				class="bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				aria-current="page">Dashboard</a
			>

			<a
				href="."
				class="border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Team</a
			>

			<a
				href="."
				class="border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:hover:bg-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Projects</a
			>
		</div>
		<div class="border-t border-slate-200 p-4">
			<ThemeSelect />
		</div>
	</nav>
</div>

<h2 class="m-8 font-bold text-xl tracking-tighter text-slate-600 dark:text-slate-400">Example Content</h2>

<div class="m-8 max-w-sm">
	<div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
		<div>
			<span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
				<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
					/>
				</svg>
			</span>
		</div>
		<h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
		<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
			The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
		</p>
	</div>
</div>

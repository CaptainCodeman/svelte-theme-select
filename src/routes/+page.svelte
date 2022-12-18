<script lang="ts">
	import { defaultIcons } from '$lib/icon'
	import { defaultLabels } from '$lib/theme'
</script>

<pre class="text-xs">{JSON.stringify(defaultLabels, null, 2)}</pre>

{@html defaultIcons.dark(false, 'w-12 h-12')}
{defaultIcons.dark(false, 'w-12 h-12')}
{@html defaultIcons.dark(true, 'w-12 h-12')}
{defaultIcons.dark(true, 'w-12 h-12')}

{@html defaultIcons.light(false, 'w-12 h-12')}
{defaultIcons.light(false, 'w-12 h-12')}
{@html defaultIcons.light(true, 'w-12 h-12')}
{defaultIcons.light(true, 'w-12 h-12')}

{@html defaultIcons.system(false, 'w-12 h-12')}
{defaultIcons.system(false, 'w-12 h-12')}
{@html defaultIcons.system(true, 'w-12 h-12')}
{defaultIcons.system(true, 'w-12 h-12')}

<p class="stroke-sky-500">stroke-sky-500</p>
<p class="fill-sky-500">fill-sky-500</p>
<p class="fill-sky-400/25">fill-sky-400/25</p>
<p class="stroke-neutral-400">stroke-neutral-400</p>
<p class="fill-neutral-400">fill-neutral-400</p>
<p class="dark:stroke-neutral-500">dark:stroke-neutral-500</p>
<p class="dark:fill-neutral-500">dark:fill-neutral-500</p>

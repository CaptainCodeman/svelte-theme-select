<!-- this sets initial dark mode class based on user preference / device settings (in page <head> to avoid FOUC) -->
<svelte:head>
	<script>document.documentElement.classList.toggle('dark', localStorage.theme === 'dark' || !localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)</script>
</svelte:head>

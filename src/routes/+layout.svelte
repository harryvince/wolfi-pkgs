<script lang="ts">
	import { onMount } from 'svelte';
	import { initTheme } from '$lib/stores/theme';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	onMount(() => initTheme());

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script defer src="https://assets.onedollarstats.com/stonks.js"></script>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-gray-900 text-white">
	{@render children?.()}
</div>

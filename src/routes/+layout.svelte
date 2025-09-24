<script lang="ts">
    import { onMount } from 'svelte';
	import { theme, initTheme } from '$lib/stores/theme';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	onMount(() => {
		initTheme();
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-gray-900 text-white min-h-screen flex justify-center items-center">
{@render children?.()}
</div>

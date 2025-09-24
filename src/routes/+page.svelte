<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	let input = $state('');
</script>

<svelte:head>
	<title>Wolfi Packages</title>
</svelte:head>

<div>
	<h1 class="scroll-m-20 pb-4 text-4xl font-extrabold tracking-tight text-balance">
		Search Packages
	</h1>
	<Input class="text-black" bind:value={input} />
	<div class="pt-4"></div>
	<Button class="min-w-full" href={`/package/${input}`}>Search</Button>
</div>

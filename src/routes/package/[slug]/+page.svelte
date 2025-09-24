<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';

	const items = ['checksum', 'compressedSize', 'installedSize', 'license'];

	let { data }: PageProps = $props();
	const id = $props.id();
	const slug = $state(page.params.slug);
</script>

<svelte:head>
	<title>{slug} - Wolfi Packages</title>
</svelte:head>

{#if data.pkg}
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>{data.pkg.name}</Card.Title>
			<Card.Description>{data.pkg.description}</Card.Description>
			<Card.Action>{data.pkg.version}</Card.Action>
		</Card.Header>
		<Card.Content>
			<div class="flex flex-col gap-2">
				{#each items as item}
					<Label for={`${item}-${id}`}>{item}</Label>
					<Input
						class="text-black"
						id={`${item}-${id}`}
						disabled
						value={data.pkg[item as keyof typeof data.pkg]}
					/>
				{/each}
			</div>
		</Card.Content>
		<Card.Footer class="flex-col gap-2"></Card.Footer>
	</Card.Root>
{:else}
	<div class="flex flex-col">
		<h1 class="scroll-m-20 pb-4 text-4xl font-extrabold tracking-tight text-balance">
			404 - Not Found
		</h1>
		<Button><a href="/">Back</a></Button>
	</div>
{/if}

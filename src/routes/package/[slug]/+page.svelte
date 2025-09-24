<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

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
		<Card.Footer class="flex-col gap-2">
			<Button class="cursor-pointer" onclick={() => history.back()}>Back</Button>
		</Card.Footer>
	</Card.Root>
{:else}
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>We couldn't find that package</Card.Title>
			<Card.Description
				>Here's a list of all the packages we have with a search for {slug}</Card.Description
			>
		</Card.Header>
		<ScrollArea>
			<Card.Content>
				<div class="flex max-h-96 flex-col gap-2">
					{#each data.pkgs as item}
						<Button href={`/package/${item.name}`}>{item.name}</Button>
					{/each}
				</div>
			</Card.Content>
		</ScrollArea>
		<Card.Footer class="flex-col gap-2">
			<Button class="cursor-pointer" onclick={() => history.back()}>Back</Button>
		</Card.Footer>
	</Card.Root>
{/if}

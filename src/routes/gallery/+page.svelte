<script>
	import { onMount } from 'svelte';
	import { fetchImages } from '$lib/imageService';

	let images = [];

	// on mount fetch metadata containing images
	onMount(async () => {
		images = await fetchImages();
	});
</script>

<div class="grid grid-cols-2 md:grid-cols-3">
		{#each images as image}
		<div class="aspect-auto">
			<img
				class="object-cover w-auto h-auto rounded-lg"
				src={image}
				alt="description"
			/>
		</div>
		{/each}
</div>

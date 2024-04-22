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
			<img
				class="h-auto max-w-full rounded-lg"
				src={image}
				alt="description"
				width="80%"
				height="80%"
			/>
		{/each}
</div>

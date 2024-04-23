<script>
	import { onMount } from 'svelte';
	import { fetchImages } from '$lib/imageService';

	let images = [];

	// on mount fetch metadata containing images
	onMount(async () => {
		images = await fetchImages();
	});
</script>

<div class="md:masonry-2-col lg:masonry-3-col box-border mx-36 my-20 before:box-inherit after:box-inherit">
		{#each images as image}
		<div class="break-inside aspect-auto p-1">
			<img
				class="object-cover w-auto h-auto rounded-lg"
				src={image}
				alt="description"
			/>
		</div>
		{/each}
</div>

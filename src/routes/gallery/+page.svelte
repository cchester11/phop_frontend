<script>
	import { onMount } from 'svelte';
	import { fetchImages } from '$lib/imageService';

	let images = [];

	// on mount fetch metadata containing images
	onMount(async () => {
		images = await fetchImages();
	});

	// function here
	// accepts event
	// takes event.target and captures the image url associated
	// saves image url to local storage or prop drills image url the component which displays the full page view of the image
	// routes user to full page view component where the image url will be displayed
</script>

<div class="md:masonry-2-col lg:masonry-3-col box-border mx-36 my-20 before:box-inherit after:box-inherit">
		{#each images as image}
		<div class="break-inside aspect-auto p-1">
			<img
				class="object-cover w-auto h-auto rounded-lg hover:cursor-pointer hover:border-2 hover:border-purple-400"
				src={image}
				alt="description"
			/>
		</div>
		{/each}
</div>

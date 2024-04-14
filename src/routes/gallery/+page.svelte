<script>
	import { onMount } from 'svelte';
	import { fetchImages } from '$lib/imageService';

	let images = [];

	// on mount fetch metadata containing images
	onMount(async () => {
		images = await fetchImages();
	});
</script>

<h1>Welcome to the gallery</h1>

<div>
	<p>display images here</p>

	{#each images as image}
		<img src={image} alt="description" width="40%" height="50%"/>
	{/each}
</div>

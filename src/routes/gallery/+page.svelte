<script>
	import { onMount } from 'svelte';
	import { fetchImages } from '$lib/imageService';

	let images = [];

	// on mount fetch metadata containing images
	onMount(async () => {
		images = await fetchImages();
	});
</script>

<div>
	{#each images as image}
		<img src={image} alt="description" width="30%" height="30%"/>
	{/each}
</div>

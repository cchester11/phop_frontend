<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fetchImages } from '$lib/imageService';

	let images = [];

	// on mount fetch metadata containing images
	onMount(async () => {
		images = await fetchImages();
	});

	function handleImageClick(imageUrl) {
		const path = `/fullpage/${encodeURIComponent(imageUrl)}`
		console.log(path)
		
		goto(path);
	}
</script>

<div
	class="md:masonry-2-col lg:masonry-3-col box-border mx-36 my-20 before:box-inherit after:box-inherit"
>
	{#each images as image}
		<div class="break-inside aspect-auto p-1">
			<button type="button" on:click={() => handleImageClick(image)}>
				<img
					class="transition ease-in-out object-cover w-auto h-auto rounded-lg hover:cursor-pointer hover:border-2 hover:border-purple-400 hover:scale-95"
					src={image}
					alt="description"
				/>
			</button>
		</div>
	{/each}
</div>

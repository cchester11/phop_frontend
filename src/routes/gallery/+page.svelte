<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fetchImages } from '$lib/imageService';
	import { Rainbow } from 'svelte-loading-spinners';

	let images = [];
	let loading = true;

	// on mount fetch metadata containing images
	onMount(async () => {
		// loading remains true until the fetchImages function returns the images
		images = await fetchImages();
		loading = false;
	});

	function handleImageClick(imageUrl) {
		const path = `/fullpage/${encodeURIComponent(imageUrl)}`;
		console.log(path);

		goto(path);
	}
</script>

{#if loading}
	<!-- Show spinner while images are loading -->
	<div class="w-full flex justify-center">
		<div class="flex flex-col justify-around w-1/4">
			<div class="w-full flex justify-center">
				<Rainbow size="60" color="#CF9FFF" unit="px" duration="1s" />
			</div>
			<br/>
			<div class="w-full flex justify-center bg-purple-400 rounded p-4 text-white mt-9">
				<p>Loading Gallery...</p>
			</div>
		</div>
	</div>
{:else}
	<div
		class="md:masonry-2-col lg:masonry-3-col box-border mx-36 my-20 before:box-inherit after:box-inherit"
	>
		{#each images as image}
			<div class="break-inside aspect-auto p-1">
				<button type="button" on:click={() => handleImageClick(image)}>
					<img
						class="transition ease-in-out object-cover xl:w-auto lg:w-auto md:w-auto xl:h-auto lg:h-auto md:h-auto rounded-lg hover:cursor-pointer hover:border-2 hover:border-purple-400 hover:scale-95 hover:grayscale"
						src={image}
						alt="description"
					/>
				</button>
			</div>
		{/each}
	</div>
{/if}

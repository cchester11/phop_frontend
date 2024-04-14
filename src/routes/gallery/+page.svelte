<script>
	import { onMount } from 'svelte';

	let imageName = '';
	let imageData = [];
	let images = [];

	const fetchImageNames = 'http://localhost:8000/api/gallery';
	const fetchPerImage = 'http://localhost:8000/api/sendImage/';

	const fetchImages = async () => {
		try {
			const response = await fetch(fetchImageNames);
			const data = await response.json();

			// store metadata names in an array
			for (let i = 0; i < data.length; i++) {
				let curr = data[i];
				const { id, name, imageUrl } = curr;
				imageData.push(name);
			}

			// for loop to fetch image according to image name in imageData array
			for (let i = 0; i < imageData.length; i++) {
				imageName = imageData[i];

				const response = await fetch(fetchPerImage + imageName);
				// convert image response into blob
				const blob = await response.blob();
				// store images in imageURL's and save to an array
				const imageUrl = URL.createObjectURL(blob);

				images.push(imageUrl);

				console.log(images)
			}
		} catch (error) {
			console.error('Error fetching images: ', error);
		}
	};

	// on mount fetch metadata containing images
	onMount(() => {
		fetchImages();
	});
</script>

<h1>Welcome to the gallery</h1>

<div>
	<p>display images here</p>

	{#each images as image}
		<img src={image} alt="description">
	{/each}
</div>

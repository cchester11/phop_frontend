<script>
	import { onMount } from 'svelte';
	let imageName = '';
	const fetchImageNames = 'http://localhost:8000/api/gallery';
	const fetchPerImage = 'http://localhost:8000/api/sendImage/' + imageName;
	let imageData = [];

	const fetchImageMetaData = async () => {
		try {
			const response = await fetch(fetchImageNames);
			const data = await response.json();

			// store metadata names in an array
			for(let i = 0; i < data.length; i ++) {
				let curr = data[i]
				
				const { id, name, imageUrl } = curr;

				imageData.push(name);
			};
		} catch (error) {
			console.error('Error fetching images: ', error);
		};
	};

	// on mount fetch metadata containing images
	onMount(() => {
		fetchImageMetaData();
	});

	// map the array; for every name, fetch the associated image

	// once image is fetched, store it in an array or object (which ever is better)
</script>

<h1>Welcome to the gallery</h1>

<div>
	<p>display images here</p>
</div>
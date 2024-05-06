export async function fetchImages(): Promise<string[]> {
	const fetchImageNames = 'https://phopbackend-production.up.railway.app/api/gallery';
	const fetchPerImage = 'https://phopbackend-production.up.railway.app/api/sendImage/';

	let imageData: string[] = [];

	try {
		const response = await fetch(fetchImageNames);
		const data = await response.json();

		let images: string[] = [];

		// store metadata names in an array
		for (let i = 0; i < data.length; i++) {
			let curr = data[i];
			const { id, name, imageUrl } = curr;
			imageData.push(name);
		}

		// for loop to fetch image according to image name in imageData array
		for (let i = 0; i < imageData.length; i++) {
			const imageName = imageData[i];

			const response = await fetch(fetchPerImage + imageName);
			// convert image response into blob
			const blob = await response.blob();
			// store images in imageURL's and save to an array
			const imageUrl = URL.createObjectURL(blob);

			images.push(imageUrl);
		}

		return images;
	} catch (error) {
		console.error('Error fetching images: ', error);
		// Return an empty array or handle the error differently based on your requirements
		return [];
	}
}

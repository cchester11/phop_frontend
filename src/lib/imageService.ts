export async function fetchImages(): Promise<string[]> {
	let NODE_ENV = false;
	let fetchImageNames;
	let fetchPerImage;

	if (process.env.NODE_ENV === 'production') {
		NODE_ENV = true;
	}

	if ((NODE_ENV == false)) {
		console.log('running locally');
		fetchImageNames = 'http://localhost:8000/api/gallery';
		fetchPerImage = 'http://localhost:8000/api/sendImage/';
	} else {
		console.log('running in production');
		fetchImageNames = 'https://phopbackend-production.up.railway.app/api/gallery';
		fetchPerImage = 'https://phopbackend-production.up.railway.app/api/sendImage/';
	}

	let imageData: string[] = [];

	try {
		console.log(fetchImageNames)
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

			console.log(fetchPerImage)
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

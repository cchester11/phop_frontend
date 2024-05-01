<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="w-full flex justify-center items-center mb-16">
	<div class="w-1/2">
		<div class="w-full flex justify-end items-center">
			<button
				class="mb-4 p-2 rounded-lg bg-purple-400 text-white text-sm hover:bg-purple-600 focus:outline-none"
			>
				<a href="/gallery"> X </a>
			</button>
		</div>
		<img src={data.image} alt="Something" class="rounded" />
	</div>
</div>

<style>
</style>

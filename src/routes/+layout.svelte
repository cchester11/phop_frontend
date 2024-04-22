<script>
	import '../app.css';
</script>

<header class="font-serif">
	<nav class="bg-gray-800">
		<div class="flex justify-between items-center h-20">
			<!-- Container for the heading, aligned to the left -->
			<div class="mx-7 text-white">
				<h1>Charles Chester Photography</h1>
			</div>

			<!-- Container for the navigation buttons, aligned to the right -->
			<div class="flex flex-row">
				<div class="mx-7 text-white">
					<a
						href="/gallery"
						class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>Gallery</a
					>
				</div>
				<div class="mx-7 text-white">
					<a
						href="/contact"
						class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>Contact</a
					>
				</div>
			</div>
		</div>
	</nav>
</header>

<slot></slot>

<footer class="bg-gray-800 font-serif">
	<div class="flex relative justify-center items-center h-20">
		<h1 class="text-gray-300">
			Powered by:
			<span>
				<a href="https://github.com/cchester11" target="_blank">github.com/cchester11</a>
			</span>
		</h1>
	</div>
</footer>

<style>
</style>

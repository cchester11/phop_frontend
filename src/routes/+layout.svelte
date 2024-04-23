<script>
	import '../app.css';
</script>

<header class="font-thin">
	<nav class="bg-gray-800">
		<div class="flex justify-between items-center h-36">
			<!-- Container for the heading, aligned to the left -->
			<div class="mx-7 text-gray-300 text-2xl">
				<div>
                              <p class="text-2xl">Charles Chester</p>
                        </div>
                        <div>
                              <p class="text-2xl">Photography</p>
                        </div>
			</div>

			<!-- Container for the navigation buttons, aligned to the right -->
			<div class="flex flex-row font-thin">
				<div class="mx-7 text-white">
					<a
						href="/gallery"
						class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
						>Gallery</a
					>
				</div>
				<div class="mx-7 text-white">
					<a
						href="/contact"
						class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
						>Contact</a
					>
				</div>
			</div>
		</div>
	</nav>
</header>

<slot></slot>

<footer class="bg-gray-800 text-gray-300 font-thin">
	<div class="flex flex-row justify-between px-10 items-center h-36">
            <div class="flex flex-row">
                  <div class="mx-3">
                        <img src="/github_icon.png" alt="github"/>
                  </div>
                  <div class="mx-3">
                        <img src="/instagram_logo_icon.png" alt="instagram" />
                  </div>
                  <div class="mx-3">
                        <img src="/substack_logo.png" alt="substack" />
                  </div>
            </div>
            <div>
                  <h1>
                        Powered by:
                        <span>
                              <a href="https://github.com/cchester11" target="_blank">github.com/cchester11</a>
                        </span>
                  </h1>
            </div>
	</div>
</footer>

<style>
</style>

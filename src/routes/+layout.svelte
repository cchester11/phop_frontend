<script>
	import '../app.css';
</script>

<header class="font-thin text-slate-900">
	<nav class="bg-slate-50">
		<div class="flex justify-between items-center h-36">
			<!-- Container for the heading, aligned to the left -->
			<div class="mx-7">
				<img src="/photo_icon.png" alt="logo" />
			</div>

			<!-- Container for the navigation buttons, aligned to the right -->
			<div class="flex flex-row font-thin">
				<div class="mx-7">
					<a
						href="/gallery"
						class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
						>Gallery</a
					>
				</div>
				<div class="mx-7">
					<a
						href="/contact"
						class= "hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
						>Contact</a
					>
				</div>
			</div>
		</div>
	</nav>
</header>

<div class="w-full flex justify-center items-center my-16">
      <h1 class="text-4xl text-sky-700" style="font-family: Notable, sans-serif; font-weight: 400; font-style: normal;">Charles Chester Photography</h1>
</div>

<slot></slot>

<footer class="font-thin text-slate-900 bg-slate-50">
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
            <div class="text-xl">
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

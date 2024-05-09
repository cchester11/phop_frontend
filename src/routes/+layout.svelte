<script>
	import '../app.css';
	import { Jumper } from 'svelte-loading-spinners';
	import { navigating } from '$app/stores';
</script>

<div class="w-full h-full flex flex-col justify-between">
	<header class="font-thin text-slate-900">
		<nav class="bg-slate-50">
			<div class="flex justify-between items-center h-36">
				<!-- Container for the heading, aligned to the left -->
				<div class="mx-7">
					<a href="/">
						<img src="/photo_icon.png" alt="logo" />
					</a>
				</div>

				<!-- Container for the navigation buttons, aligned to the right -->
				<div class="flex flex-row font-thin">
					<div class="mx-7">
						<a
							href="/gallery"
							class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm">Gallery</a
						>
					</div>
					<div class="mx-7">
						<a
							href="/contact"
							class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm">Contact</a
						>
					</div>
				</div>
			</div>
		</nav>
	</header>

	<div class="w-full flex justify-center items-center my-16">
		<div class="w-1/2 flex justify-center items-center">
			<h1
				class="xl:text-2xl sm:text-xl text-slate-900"
				style="font-family: Notable, sans-serif; font-weight: 400; font-style: normal;"
			>
				Charles Chester Photography
			</h1>
		</div>
	</div>
	<div>
		{#if $navigating}
			<Jumper size="60" color="#CF9FFF" unit="px" duration="1s" />
		{/if}

		<slot></slot>
	</div>

	<footer class="font-thin text-slate-900 bg-slate-50">
		<div class="flex flex-row justify-between px-10 items-center h-36">
			<div class="flex flex-row items-center mr-3">
				<div class="mx-3">
					<img
						class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
						src="/github_icon.png"
						alt="github"
					/>
				</div>
				<div class="mx-3">
					<img
						class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
						src="/instagram_logo_icon.png"
						alt="instagram"
					/>
				</div>
				<div class="mx-3">
					<img
						class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
						src="/substack_logo.png"
						alt="substack"
					/>
				</div>
			</div>

			<div class="text-sm ml-3">
				<p>
					Powered by:
					<span>
						<a href="https://github.com/cchester11" target="_blank">github.com/cchester11</a>
					</span>
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
</style>

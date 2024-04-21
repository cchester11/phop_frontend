<script>
	
</script>

<form method="POST" name="contact_form" action="/contact">
	<div class="flex flex-col">
		<div class="mt-6">
			<label for="name">
				Your Name:
			</label>
			<input type="text" name="name" id="name" class="border-2 border-gray-400 rounded"/>
		</div>
		<div class="mt-6">
			<label for="email">
				Email Address:
			</label>
			<input type="text" name="email" id="email" class="border-2 border-gray-400 rounded"/>
		</div>
		<div class="mt-6">
			<label for="phone">
				Phone Number:
			</label>
			<input type="text" name="phone" id="phone" class="border-2 border-gray-400 rounded"/>
		</div>
		<div class="mt-6">
			<button type="submit" class="rounded-lg bg-purple-600 p-1">Submit</button>
		</div>
	</div>
</form>

<style>
	/* Additional styles specific to your component */
</style>

<script>
	
</script>

<form method="POST" name="contact_form" action="/contact" class="font-sans font-thin">
	<div class="flex flex-col justify-center items-center h-screen">
		<div class="mt-6">
			<div>
				<label for="name">Name</label>
			</div>
			<div>
				<input type="text" name="name" id="name" placeholder="John Hancock"  class="border border-gray-400 rounded"/>
			</div>
		</div>
		<div class="mt-6">
			<div>
				<label for="email">Email</label>
			</div>
			<div>
				<input type="text" name="email" id="email" placeholder="myemail@example.com" class="border border-gray-400 rounded"/>
			</div>
		</div>
		<div class="mt-6">
			<div>
				<label for="phone">Phone</label>
			</div>
			<div>
				<input type="text" name="phone" id="phone" placeholder="(512) 433-7865"  class="border border-gray-400 rounded"/>
			</div>
		</div>
		<div class="mt-6">
			<button type="submit" class="rounded text-white bg-purple-400 p-1">Submit</button>
		</div>
	</div>
</form>

<style>
	/* Additional styles specific to your component */
</style>

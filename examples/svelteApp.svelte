<script>
	export let name;

	const arr = [1, "two", true];
	const newArr = arr.map((val) => {
		if (typeof val === 'string') {
			return val.length
		}
		return val
	});
	console.log(newArr);
</script>

<main>
	<h1 id="root">Hello {name}!</h1>
	<p>
		Visit the 
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a> 
		to learn how to build Svelte apps.
	</p>
</main>

<style>
	#root {
		font-family: Cartograph Mono CF, Helvetica, Arial, sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
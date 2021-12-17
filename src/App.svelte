<script lang="ts">
	import Calculate from "./components/calculate.svelte";
</script>

<main>
	<Calculate />
</main>

<style>
	:global(body) {
		background-color: #111;
	}

	:root {
		--backgroundColor: #555;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>

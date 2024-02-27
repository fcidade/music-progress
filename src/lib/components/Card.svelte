<script lang="ts">
	export let name = '';
	export let description = '';
	export let href = '';
</script>

<a {href} class="p-4 rounded bg-white">
	<h1 class="font-bold">{name}</h1>
	<h2 class="font-bold text-lg">{description}</h2>
</a>

<style>
	a {
		box-shadow: 4px 4px 14px rgba(0, 0, 0, 25%);
	}
</style>

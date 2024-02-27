<script lang="ts">
	export let name = '';
	export let description = '';
	export let href = '';
	export let imgSource = '';
</script>

<a {href} class="p-4 rounded bg-white flex justify-between align-middle">
	<div>
		<h1 class="font-bold">{name}</h1>
		<h2 class="font-bold text-lg">{description}</h2>
	</div>
	{#if imgSource}
		<div class="flex align-middle justify-center h-full">
			<img src={imgSource} alt={name} style="height: 35px" />
		</div>
	{/if}
</a>

<style>
	a {
		box-shadow: 4px 4px 14px rgba(0, 0, 0, 25%);
	}
</style>

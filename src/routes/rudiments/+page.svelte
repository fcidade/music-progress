<script lang="ts">
	export let data;
</script>

<h1>Rudimentos</h1>
{#each data.rudiments as r}
	<a href={`/rudiment/${r.id}`}>
		<h1>{r.name}</h1>
		<h2>{r.description}</h2>
	</a>
{/each}

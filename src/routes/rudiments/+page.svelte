<script lang="ts">
	import BackButton from '../../lib/components/BackButton.svelte';
	import Card from '../../lib/components/Card.svelte';
	import PageTitle from '../../lib/components/PageTitle.svelte';

	export let data;
</script>

<BackButton />
<div class="flex flex-col justify-center align-middle gap-3 w-full">
	<PageTitle>RUDIMENTOS</PageTitle>
	{#each data.rudiments as r}
		<Card name={r.name} description={r.description} href={`/rudiment/${r.id}`} />
	{/each}
</div>

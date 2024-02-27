<script>
	import Card from '$lib/components/Card.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<div class="flex flex-col justify-center align-middle gap-6 w-full">
	<div class="text-center pt-10">
		<PageTitle>MUSIC THEORY</PageTitle>
		<img src="/generic-rhythm.png" alt="figuras ritmicas" class="w-60 text-center pt-6" />
		<h3 class="font-normal text-center text-2xl my-8">O que você quer praticar hoje?</h3>
	</div>

	<Card name="Rudimentos" description="Registrar evolução" href="/rudiments" />
</div>

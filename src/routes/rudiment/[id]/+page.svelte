<script lang="ts">
	import Button from '../../../lib/components/Button.svelte';
	import PageTitle from '../../../lib/components/PageTitle.svelte';
	import Record from '../../../lib/components/Record.svelte';
	import { storable } from '../../../lib/storable';

	export let data;

	const defaultBpm = 100;
	let currentBpm = defaultBpm;

	let registersStore = storable<any[]>(`rudiment-${data.id}`, []);
	$: registers = $registersStore;

	const registerNewBpm = () => {
		if (currentBpm <= 0) {
			console.log('currentBpm should be bigger than zero');
			return;
		}
		$registersStore = [...$registersStore, { bpm: currentBpm, date: new Date() }];
		currentBpm = defaultBpm;
	};

	const clearRegisters = () => {
		$registersStore = [];
	};
</script>

<div class="flex flex-col justify-center align-middle gap-3 w-full">
	<PageTitle>{data.name}</PageTitle>
	<img src="/generic-rhythm.png" alt="figuras ritmicas" class="w-60 text-center pt-6" />
	<h3 class="text-center">Pressione para ouvir</h3>
	<h2>Registre seu progresso!</h2>
	<div class="flex gap-2">
		<input
			class="p-4 text-2xl stroke-black stroke-2 rounded flex-1 min-w-0"
			type="number"
			placeholder="120 bpm"
			bind:value={currentBpm}
		/>
		<Button on:click={registerNewBpm}>Registrar</Button>
	</div>
	{#each registers as r}
		<Record bpm={r.bpm} date={r.date} />
	{/each}
	<Button on:click={clearRegisters}>Limpar histórico</Button>
</div>

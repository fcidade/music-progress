<script lang="ts">
	import BackButton from '../../../lib/components/BackButton.svelte';
	import Button from '../../../lib/components/Button.svelte';
	import MusicNotation from '../../../lib/components/MusicNotation.svelte';
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

<BackButton />
<div class="flex flex-col justify-center align-middle gap-3 w-full">
	<div class="text-center">
		<PageTitle>{data.name}</PageTitle>
	</div>
	<div class="rounded bg-white flex justify-between align-middle box-shadow text-center">
		<MusicNotation systemFn={data.systemFn} />
	</div>
	<h3 class="text-center">Pressione para ouvir</h3>
	<h2 class="text-2xl">Registre seu progresso!</h2>
	<div class="flex gap-2">
		<input
			class="p-4 text-2xl stroke-black stroke-2 rounded flex-1 min-w-0 border-black border-2"
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

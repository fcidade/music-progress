<script lang="ts">
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

<h1>{data.name}</h1>
<h3>Pressione para ouvir</h3>
<h2>Registre seu progresso!</h2>
<div>
	<input type="number" placeholder="120 bpm" bind:value={currentBpm} />
	<button on:click|preventDefault={registerNewBpm}>Registrar</button>
</div>
{#each registers as r}
	<Record bpm={r.bpm} date={r.date} />
{/each}
<button on:click={clearRegisters}>Limpar histórico</button>

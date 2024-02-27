<script lang="ts">
	export let bpm = 120;
	export let date = new Date();

	function formatCustomDate(date: Date): string {
		const day: number = date.getDate();
		const month: string = date.toLocaleString('pt-BR', { month: 'short' });
		const year: number = date.getFullYear();
		const hourMinute: string = date.toLocaleTimeString('pt-BR', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		});

		return `${hourMinute} - ${day}, ${month} ${year}`;
	}
</script>

<div class="shadow-custom p-4 rounded bg-white flex justify-between align-middle">
	<h1 class="font-bold text-2xl">{bpm} bpm</h1>
	<h2 class="font-medium text-lg">{formatCustomDate(date)}</h2>
</div>

<style>
	.shadow-custom {
		box-shadow: 4px 4px 14px rgba(0, 0, 0, 25%);
	}
</style>

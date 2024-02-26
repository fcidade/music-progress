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

		return `${day}, ${month} ${year} - ${hourMinute}`;
	}
</script>

<div>
	<h1>{bpm}</h1>
	<h2>{formatCustomDate(date)}</h2>
</div>

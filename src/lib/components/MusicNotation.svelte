<script lang="ts">
	import Vex, { Annotation, StaveNote } from 'vexflow';
	import { onMount } from 'svelte';

	const { Factory } = Vex.Flow;

	export let systemFn = (system: Vex.System, score: Vex.EasyScore) => {};

	const note = (note: string, duration: string, annotation = '') =>
		new StaveNote({ keys: [note], duration }).addModifier(
			new Annotation(annotation).setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
		);

	onMount(() => {
		const vf = new Factory({
			renderer: { elementId: 'output', width: 0, height: 0 }
		});

		const score = vf.EasyScore();
		const system = vf.System();
		systemFn(system, score);
		vf.draw();
	});
</script>

<div id="output" class="canvas flex justify-center"></div>

<style>
	.canvas {
		width: 100%;
	}
</style>

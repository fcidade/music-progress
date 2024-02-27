import Vex, { Annotation, StaveNote } from "vexflow";

const newRudiment = (id: string, name: string, description: string, systemFn: (system: Vex.System, score: Vex.EasyScore) => void) => ({
    id,
    name,
    description,
    systemFn
})


const note = (note: string, duration: string, annotation = '') =>
    new StaveNote({ keys: [note], duration }).addModifier(
        new Annotation(annotation).setVerticalJustification(Annotation.VerticalJustify.BOTTOM)
    );

export const rudiments = [
    newRudiment("1", "Single Stroke", "4/4 - Iniciante", (system: Vex.System, score: Vex.EasyScore) => {
        system
            .addStave({
                voices: [
                    score.voice(
                        score
                            .beam([
                                note('C/5', '16', 'R'),
                                note('C/5', '16', 'L'),
                                note('C/5', '16', 'R'),
                                note('C/5', '16', 'L')
                            ])
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                    )
                ]
            })
            .addClef('percussion')
            .addTimeSignature('4/4');
    }),
    newRudiment("2", "Double Stroke", "4/4 - Iniciante", (system: Vex.System, score: Vex.EasyScore) => {
        system
            .addStave({
                voices: [
                    score.voice(
                        score
                            .beam([
                                note('C/5', '16', 'R'),
                                note('C/5', '16', 'R'),
                                note('C/5', '16', 'L'),
                                note('C/5', '16', 'L')
                            ])
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                    )
                ]
            })
            .addClef('percussion')
            .addTimeSignature('4/4');
    }),
    newRudiment("3", "Paradiddle", "4/4 - Iniciante", (system: Vex.System, score: Vex.EasyScore) => {
        system
            .addStave({
                voices: [
                    score.voice(
                        score
                            .beam([
                                note('C/5', '16', 'R'),
                                note('C/5', '16', 'L'),
                                note('C/5', '16', 'R'),
                                note('C/5', '16', 'R')
                            ])
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'R')
                                ])
                            )
                            .concat(
                                score.beam([
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'R'),
                                    note('C/5', '16', 'L'),
                                    note('C/5', '16', 'L')
                                ])
                            )
                    )
                ]
            })
            .addClef('percussion')
            .addTimeSignature('4/4');
    }),
]
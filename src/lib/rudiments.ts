const newRudiment = (id: string, name: string, description: string) => ({
    id,
    name,
    description,
})

export const rudiments = [
    newRudiment("1", "Single Stroke", "4/4 - Iniciante"),
    newRudiment("2", "Double Stroke", "4/4 - Iniciante"),
    newRudiment("3", "Paradiddle", "4/4 - Iniciante"),
]
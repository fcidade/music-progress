export type BpmRegister = {
    bpm: number;
    date: Date;
};

export const newRegister = (bpm: number): BpmRegister => ({
    bpm,
    date: new Date()
});

export const getRegisters = (rudimentID: string): BpmRegister[] => {
    const localStorageRegisters = localStorage.getItem(`rudiments-register-${rudimentID}`)
    if (!localStorageRegisters) {
        return []
    }
    return JSON.parse(localStorageRegisters)
}

export const register = (rudimentID: string, bpm: number) => {
    const currRegisters = getRegisters(rudimentID)
    const value = JSON.stringify([
        ...currRegisters,
        newRegister(bpm),
    ])
    localStorage.setItem(`rudiments-register-${rudimentID}`, value)
}
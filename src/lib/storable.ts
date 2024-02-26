import { writable, get, type Writable } from 'svelte/store';

interface Storable<T> extends Writable<T> {
    set: (value: T) => void;
    update: (callback: (value: T) => T) => void;
}

const dateReviver = (key: string, value: any): any => {
    if (typeof value === 'string') {
        const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
        const match = value.match(dateRegex);

        if (match) {
            return new Date(value);
        }
    }

    return value;
};

export function storable<T>(key: string, data: T): Storable<T> {
    const store: Writable<T> = writable(data);
    const { subscribe, set }: Storable<T> = store;
    const isBrowser: boolean = typeof window !== 'undefined';

    if (isBrowser && localStorage[key]) {
        set(JSON.parse(localStorage[key], dateReviver),);
    }

    return {
        subscribe,
        set: (n: T) => {
            if (isBrowser) {
                localStorage[key] = JSON.stringify(n);
            }
            set(n);
        },
        update: (cb: (value: T) => T) => {
            const updatedStore: T = cb(get(store));

            if (isBrowser) {
                localStorage[key] = JSON.stringify(updatedStore);
            }
            set(updatedStore);
        }
    };
}

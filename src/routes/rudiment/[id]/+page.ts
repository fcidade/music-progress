import { rudiments } from '../../../lib/rudiments.js';

export function load({ params: { id } }) {
    return rudiments.find(i => i.id === id)
} 
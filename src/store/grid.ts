import { Location } from '@/interfaces/Location';
import { atom } from 'jotai';

export const activeGridItemAtom = atom<string | null>(null);
export const ActiveMapLocationAtom = atom<Location | null>(null);

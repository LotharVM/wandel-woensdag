import { LAYOUT_ID_PREFIX } from '@/constants/layoutIds';
import { Location } from '@/interfaces/Location';
import { atom } from 'jotai';

export const activeGridItemAtom = atom<string | null>(null);
export const ActiveMapLocationAtom = atom<Location | null>(null);
export const layoutIdPrefixAtom = atom<string | null>(LAYOUT_ID_PREFIX.DEFAULT);
export const scrollHorizontalAtom = atom<number>(0);

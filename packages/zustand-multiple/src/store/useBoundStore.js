// @ts-check
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import './types';

/** @type {FishSliceCreator} */
export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

/** @type {BearSliceCreator} */
export const createBearSlice = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

/** @param {import('zustand').StateCreator<BearSlice & FishSlice>} f */
const middleware = (f) => devtools(immer(f));

/** @type {BoundStore} */
export const useBoundStore = create(
  middleware((...args) => ({
    ...createBearSlice(...args),
    ...createFishSlice(...args),
  })),
);

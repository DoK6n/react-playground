// @ts-check
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import './types';

/** @type {FishSliceCreator} */
export const createFishSlice = (set, get) => ({
  fishes: 0,
  addFish: () =>
    set((state) => {
      state.fishes += 1;
    }),
});

/** @type {BearSliceCreator} */

/** @type {import('zustand').StateCreator<BearSlice & FishSlice, MiddleWaresType, [], BearSlice>} */
export const createBearSlice = (set, get) => ({
  bears: 0,
  addBear: () =>
    set((state) => {
      state.bears += 1;
    }),
  eatFish: () =>
    set((state) => {
      state.fishes -= 1;
    }),
});

/** @param {import('zustand').StateCreator<BearSlice & FishSlice>} f */
const middlewares = (f) => immer(devtools(f));

/** @type {BoundStore} */
export const useBoundStore = create(
  middlewares((...args) => ({
    ...createBearSlice(...args),
    ...createFishSlice(...args),
  })),
);

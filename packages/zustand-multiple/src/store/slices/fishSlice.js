// @ts-check
import '../types';

/** @type {FishSliceCreator} */
export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

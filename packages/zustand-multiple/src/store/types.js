/**
 * @typedef {{
 *  bears: number,
 *  addBear: () => void,
 *  eatFish: () => void,
 * }} BearSlice
 *
 * @typedef {{
 *  fishes: number,
 *  addFish: () => void,
 * }} FishSlice
 */

/**
 * @typedef {import('zustand').StateCreator<
 *    BearSlice & FishSlice,
 *    [],
 *    [["zustand/devtools", never], ["zustand/immer", never]],
 *    FishSlice
 * >} FishSliceCreator
 */

/**
 * @typedef {import('zustand').StateCreator<
 *    BearSlice & FishSlice,
 *    [],
 *    [["zustand/devtools", never], ["zustand/immer", never]],
 *    BearSlice
 *  >} BearSliceCreator
 */

/**
 * @typedef {import('zustand').UseBoundStore<import('zustand').StoreApi<BearSlice & FishSlice>>} BoundStore
 */

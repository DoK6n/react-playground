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
 * @typedef {[["zustand/immer", never], ["zustand/devtools", never]]} MiddleWaresType
 */

/**
 * @typedef {import('zustand').StateCreator<
 *    BearSlice & FishSlice,
 *    MiddleWaresType,
 *    [],
 *    FishSlice
 * >} FishSliceCreator
 */

/**
 * @typedef {import('zustand').StateCreator<
 *    BearSlice & FishSlice,
 *    MiddleWaresType,
 *    [],
 *    BearSlice
 *  >} BearSliceCreator
 */

/**
 * @typedef {import('zustand').UseBoundStore<import('zustand').StoreApi<BearSlice & FishSlice>>} BoundStore
 */

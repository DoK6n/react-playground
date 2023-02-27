import type { StateCreator } from 'zustand';
import { type PostSlice } from './createPostSlice';

export interface SearchFilter {
  userId: number;
  postId: number;
}

const initialSearchFilterState: SearchFilter = {
  userId: 0,
  postId: 0,
};

export interface SearchFilterSlice {
  searchFilterState: SearchFilter;
  setUserId: (id: number) => void;
  setPostId: (id: number) => void;
}

export const createSearchFilterSlice: StateCreator<
  SearchFilterSlice & PostSlice,
  [],
  [],
  SearchFilterSlice
> = (set) => ({
  searchFilterState: initialSearchFilterState,
  setUserId: (id) =>
    set(({ searchFilterState }) => {
      return {
        searchFilterState: { ...searchFilterState, userId: id },
      };
    }),
  setPostId: (id) =>
    set(({ searchFilterState }) => {
      return {
        searchFilterState: { ...searchFilterState, userId: id },
      };
    }),
});

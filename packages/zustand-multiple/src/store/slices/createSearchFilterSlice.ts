import type { StateCreator } from 'zustand';
import { MiddleWaresType } from '../storeTypes';
import { type PostsSlice } from './createPostSlice';

export interface SearchFilter {
  userId: number;
  postId: number;
}

const initialSearchFilterState: SearchFilter = {
  userId: 0,
  postId: 0,
};

export interface SearchFilterSlice {
  searchFilter: SearchFilter;
  setUserId: (id: number) => void;
  setPostId: (id: number) => void;
}

export const createSearchFilterSlice: StateCreator<
  SearchFilterSlice & PostsSlice,
  MiddleWaresType,
  [],
  SearchFilterSlice
> = (set) => ({
  searchFilter: initialSearchFilterState,
  setUserId: (id) =>
    set(({ searchFilter }) => {
      searchFilter.userId = id;
    }),
  setPostId: (id) =>
    set(({ searchFilter }) => {
      searchFilter.postId = id;
    }),
});

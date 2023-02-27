import type { StateCreator } from 'zustand';
import { Post } from '../../lib/api/types';
import { SearchFilterSlice } from './createSearchFilterSlice';

const initialPostState: Post[] = [];

export interface PostSlice {
  postState: Post[];
  fetchPost: (id: number) => void;
}

export const createPostSlice: StateCreator<
  SearchFilterSlice & PostSlice,
  [],
  [],
  PostSlice
> = (set) => ({
  postState: initialPostState,
  fetchPost: (id) =>
    set(({ postState }) => {
      return {
        postState: [
          {
            userId: 0,
            id: 0,
            title: 'untitled',
            body: 'no body',
          },
        ],
      };
    }),
});

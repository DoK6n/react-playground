import { create, type StateCreator } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import {
  createPostsSlice,
  createSearchFilterSlice,
  type PostsSlice,
  type SearchFilterSlice,
} from './slices';

// const middlewares = (f: StateCreator<PostsSlice & SearchFilterSlice>) => devtools(f);
// const middlewares = (f: StateCreator<PostsSlice & SearchFilterSlice>) => immer(devtools(f));
const middlewares = (f: StateCreator<PostsSlice & SearchFilterSlice>) =>
  immer(subscribeWithSelector(devtools(f)));

export const useBoundStore = create<PostsSlice & SearchFilterSlice>()(
  middlewares((...args) => ({
    ...createPostsSlice(...args),
    ...createSearchFilterSlice(...args),
  })),
);

// subscribeWithSelector
useBoundStore.subscribe(
  (state) => state.searchFilter.userId,
  (previousSelectedState) => {
    const { searchFilter, fetchPosts } = useBoundStore.getState();
    const selectedUserId = searchFilter.userId;

    fetchPosts(selectedUserId);
    console.log('[subscribe] ➜', previousSelectedState);
  },
);

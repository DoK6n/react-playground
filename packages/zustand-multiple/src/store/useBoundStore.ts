import { create } from 'zustand';
import {
  createPostSlice,
  createSearchFilterSlice,
  type PostSlice,
  type SearchFilterSlice,
} from './slices';

export const useBoundStore = create<PostSlice & SearchFilterSlice>()(
  (...a) => ({
    ...createPostSlice(...a),
    ...createSearchFilterSlice(...a),
  }),
);

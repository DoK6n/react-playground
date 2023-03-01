import type {
  Mutate,
  StateCreator,
  StoreApi,
  StoreMutatorIdentifier,
} from 'zustand';
import { getPosts } from '../../lib/api/posts/getPosts';
import { Post } from '../../lib/api/types';
import { MiddleWaresType } from '../storeTypes';
import { SearchFilterSlice } from './createSearchFilterSlice';
import { current } from 'immer';

const initialPostsState: Post[] = [];

export interface PostsSlice {
  posts: Post[];
  fetchPosts: (id: number) => void;
}

export const createPostsSlice: StateCreator<
  PostsSlice & SearchFilterSlice,
  MiddleWaresType,
  [],
  PostsSlice
> = (set) => ({
  posts: initialPostsState,
  fetchPosts: async (id) => {
    try {
      const data = await getPosts(id);
      if (!data) {
        console.log('없음');
        return;
      }

      set(({ posts }) => {
        posts.length = 0;
        posts.push(...data);
      });
    } catch (error) {
      console.error(error);
    }
  },
});

/*
  Slice 패턴 사용시 Middleware 추가한 상태에서 slice 내에서 타입 체크하려면 StateCreator 타입으로 정의해야 함.
  주의할 점은 Mis 부분인 두번째 인자에 미들웨어를 넣어줘야 정상동작
  set 함수가 타입을 제대로 읽어내지 못할땐 vscode의 Typescript: Reload Project 기능을 사용하면 됨

  type Get<T, K, F> = K extends keyof T ? T[K] : F;
  export type StateCreator<
    T,
    Mis extends [StoreMutatorIdentifier, unknown][] = [], // 두번째 인자값에 미들웨어 넣어야 정상적으로 타입 체크 통과 가능
    Mos extends [StoreMutatorIdentifier, unknown][] = [],
    U = T,
  > = ((
    setState: Get<Mutate<StoreApi<T>, Mis>, 'setState', never>,
    getState: Get<Mutate<StoreApi<T>, Mis>, 'getState', never>,
    store: Mutate<StoreApi<T>, Mis>,
  ) => U) & {
    $$storeMutators?: Mos;
  };
*/

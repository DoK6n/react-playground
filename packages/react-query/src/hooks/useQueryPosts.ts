import { getPosts } from '../lib/api/posts';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';
import delay from '../lib/delay';

const fetchPost = async (ctx: QueryFunctionContext<[string, number]>) => {
  const [_, userId] = ctx.queryKey;
  const data = await getPosts(userId);
  await delay();
  return data;
};

export function useQueryPosts(userId: number) {
  return useQuery(['posts', userId], fetchPost, {
    // 데이터 불러오기를 위한 Suspense를 활성화하는 옵션
    suspense: true,
    // Error Boundary 사용을 위한 옵션.
    // suspense 옵션이 true인 경우에는 기본값이 true로 설정된다.
    useErrorBoundary: true,
  });
}

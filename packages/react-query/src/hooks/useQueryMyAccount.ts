import { getMyAccount } from '../lib/api/me';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';
import delay from '../lib/delay';

async function FetchMyAccount(ctx: QueryFunctionContext) {
  const data = await getMyAccount();
  await delay();

  return data;
}

export function useQueryMyAccount() {
  return useQuery(['myAccount'], FetchMyAccount, {
    // 데이터 불러오기를 위한 Suspense를 활성화하는 옵션
    suspense: true,
    // Error Boundary 사용을 위한 옵션.
    // suspense 옵션이 true인 경우에는 기본값이 true로 설정된다.
    useErrorBoundary: true,
  });
}

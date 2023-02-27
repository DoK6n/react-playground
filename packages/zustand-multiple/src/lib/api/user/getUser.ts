import { fetchClient } from '../client';
import { delay } from '../delay';
import { UserId, UserInfo } from '../types';

export async function getUser({ id }: UserId) {
  const response = await fetchClient.get<UserInfo>(`/users/${id}`);
  await delay(3000);
  return response.data;
}

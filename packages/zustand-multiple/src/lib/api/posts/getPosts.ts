import { fetchClient } from '../client';
import { delay } from '../delay';
import { Post, UserId } from '../types';

export async function getPosts({ id }: UserId) {
  const response = await fetchClient.get<Post[]>(`/posts?userId=${id}`);
  await delay(3000);
  return response.data;
}

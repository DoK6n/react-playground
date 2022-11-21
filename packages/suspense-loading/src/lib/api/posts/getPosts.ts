import { fetchClient } from '../client';
import { Post, UserId } from '../types';

export function getPosts({ id }: UserId) {
  let posts: Post[] | null = null;
  const suspender = fetchClient.get<Post[]>(`/posts?userId=${id}`).then(response => {
    setTimeout(() => {
      posts = response.data;
    }, 2000);
  });

  return {
    read() {
      if (posts === null) {
        throw suspender;
      } else {
        return posts;
      }
    },
  };
}

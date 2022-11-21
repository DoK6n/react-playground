import { fetchClient } from '../client';
import { UserId, UserInfo } from '../types';

export function getUser({ id }: UserId) {
  let user: UserInfo | null = null;
  const suspender = fetchClient.get<UserInfo>(`/users/${id}`).then(response => {
    setTimeout(() => {
      user = response.data;
    }, 3000);
  });

  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    },
  };
}

import axiosClient from '../client';

export async function getUser(id: number) {
  const response = await axiosClient.get(`/user/${id}`);
  const { data } = response;
  return data;
}

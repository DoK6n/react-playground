import axiosClient from '../client';

export async function getEpisode() {
  const response = await axiosClient.get('/episode');
  const { data } = response;
  return data;
}

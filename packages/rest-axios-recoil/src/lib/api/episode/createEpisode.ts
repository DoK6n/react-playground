import axiosClient from '../client';

interface comments {
  id: number;
  penname: number;
  text: number;
  episodeId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

interface episodeUser {
  id: number;
  penname: string;
  email: string;
}

interface data {
  id: number;
  title: string;
  body: string;
  published: true;
  writter: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  user: episodeUser;
  commentCount: number;
  episodeLikeCount: number;
  comments?: comments[];
}

export async function createEpisode(data: data) {
  const response = await axiosClient.post('/episode', data);
  return response.data;
}

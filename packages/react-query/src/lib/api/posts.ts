import { AxiosResponse } from 'axios';
import axiosClient from '../axiosClient';
import { Post, CreatePostParams, UpdatePostParams } from './types';

export async function getPosts(userId: number) {
  const response = await axiosClient.get<Post[]>(`/users/${userId}/posts`);
  return response.data;
}

export async function writePost(params: CreatePostParams) {
  const response = await axiosClient.post<
    Post,
    AxiosResponse<Post>,
    CreatePostParams
  >(`/posts`, params);
  return response.data;
}

export async function editPost(params: UpdatePostParams) {
  const response = await axiosClient.patch<
    Post,
    AxiosResponse<Post>,
    UpdatePostParams
  >(`/posts/${params.id}`, params);

  return response.data;
}

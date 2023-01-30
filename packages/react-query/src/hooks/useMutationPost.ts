import { editPost, writePost } from '../lib/api/posts';
import { useMutation } from '@tanstack/react-query';
import delay from '../lib/delay';
import { CreatePostParams, UpdatePostParams } from '../lib/api/types';

export function useMutationWritePost() {
  return useMutation(async (params: CreatePostParams) => {
    const data = await writePost(params);
    await delay();
    return data;
  });
}

export function useMutationEditPost() {
  return useMutation(async (params: UpdatePostParams) => {
    const data = await editPost(params);
    await delay();
    return data;
  });
}

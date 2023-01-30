import axiosClient from '../axiosClient';
import { User } from './types';

const USER_ID = 1;

export async function getMyAccount() {
  const response = await axiosClient.get<User>(`/users/${USER_ID}`);
  return response.data;
}

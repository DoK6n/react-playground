import axios from 'axios';
import { axiosClient } from '../client';
import { delay } from '../delay';
import { Post, UserId, ValidationError } from '../types';

export async function getPosts(id: UserId) {
  try {
    const response = await axiosClient.get<Post[]>(`/posts?userId=${id}`);
    // await delay(3000);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // solution 1
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      console.log(error.status);
      console.error(error.response);
      // Do something with this error...
    } else {
      console.error(error);
    }

    // solution 2
    // if (error.response) {
    //   // The client was given an error response (5xx, 4xx)
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // } else if (error.request) {
    //   // The client never received a response, and the request was never left
    // } else {
    //   // Anything else
    // }

    // solution 3
    // console.log('error : ', error.response);
    // const statusCode = error.response.status; // 400
    // const statusText = error.response.statusText; // Bad Request
    // const message = error.response.data.message[0]; // id should not be empty
    // console.log(`${statusCode} - ${statusText} - ${message}`);
  }
}

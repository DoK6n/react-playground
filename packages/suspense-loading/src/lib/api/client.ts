const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchClient = {
  baseUrl: BASE_URL,
  async get<T>(url: string) {
    const response = await fetch(this.baseUrl.concat(url), {
      method: 'GET',
    });
    const data: T = await response.json();
    return {
      data,
    };
  },
};

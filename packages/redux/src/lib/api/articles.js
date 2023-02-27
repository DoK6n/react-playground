import axiosClient from "../axiosClient";

const PREFIX_PATH = '/articles';

/**
* @param {string} title
* @param {string} [description]
* @param {string} body
* @param {boolean} [published=false]
*/
export const createArticle = async (title, description, body, published) => {
  const response = await axiosClient.post(PREFIX_PATH, {
    title,
    description,
    body,
    published
  });
  return response;
}

export const findAllArticles = async () => {
  const response = await axiosClient.get(PREFIX_PATH);
  return response.data;
}

export const findArticleById = async (id) => {
  const response = await axiosClient.get(`${PREFIX_PATH}/${id}`);
  return response.data;
}

export const findAllDrafts = async () => {
  const response = await axiosClient.get(`${PREFIX_PATH}/drafts`);
  return response.data;
}

/**
* @param {number} id
* @param {object} data
* @param {string} [data.title]
* @param {string} [data.description]
* @param {string} [data.body]
* @param {boolean} [data.published=false]
*/
export const updateArticleById = async (id, data) => {
  const response = await axiosClient.patch(`${PREFIX_PATH}/${id}`, data);
  return response;
};

export const removeArticleById = async (id) => {
  const response = await axiosClient.delete(`${PREFIX_PATH}/${id}`);
  return response;
};

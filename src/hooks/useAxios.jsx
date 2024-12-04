import axios from "axios";

// export const useAxios = ({ baseUrl = "http://localhost:3001/products" }) => {
export const useAxios = () => {
  let baseUrl = "http://localhost:3001/products";

  const get = () => {
    return axios
      .get(baseUrl)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  const remove = (id) => {
    const urlRemove = `${baseUrl}/${id}`;
    return axios
      .delete(urlRemove)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  const put = (id, data) => {
    const urlPut = `${baseUrl}/${id}`;
    return axios
      .put(urlPut, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  const post = (data) => {
    return axios
      .post(baseUrl, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  return { get, remove, put, post };
};

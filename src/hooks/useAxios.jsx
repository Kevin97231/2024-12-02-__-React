import axios from "axios";

// export const useAxios = ({ baseUrl = "http://localhost:3001/products" }) => {
export const useAxios = () => {
  let baseUrl = "http://localhost:3001/products";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRequest = async (requestFunction, ...args) => {
    setLoading(true);
    try {
      const response = await requestFunction(...args);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  const get = () => handleRequest(axios.get, baseUrl);

  const remove = (id) => handleRequest(axios.delete, `${baseUrl}/${id}`);

  const put = (id, data) => handleRequest(axios.put, `${baseUrl}/${id}`, data);

  const post = (data) => handleRequest(axios.post, data);

  return { get, remove, put, post, loading, error };
};

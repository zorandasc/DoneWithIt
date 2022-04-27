import { useState } from "react";

//nas custom hook for caling api
//envelop with information about
//error object and loading spinner
export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    return response;
  };

  return { request, data, error, loading };
};

import { useState, useEffect } from "react";

const useFetch = ({ request, initialState, requestParams, slug }) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!request) return;
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await request();
      setLoading(false);
      if (data) return setState(data);
      setError(error.response?.data?.message || error.message);
    };

    fetchItems();
  }, [requestParams, slug]);

  return { state, setState, loading, setLoading, error, setError };
};

export default useFetch;

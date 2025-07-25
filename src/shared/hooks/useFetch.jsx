import { useState, useEffect } from "react";

const useFetch = ({ request, initialState }) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await request();
      setLoading(false);
      if (data) return setState(data);
      setError(error.response?.data?.message || error.message);
    };

    fetchItems();
  }, [request]);

  return { state, setState, loading, setLoading, error, setError };
};

export default useFetch;

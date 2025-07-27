import { useState, useEffect } from "react";

const useMultiplyFetch = ({ requests = [], initialState = [] }) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      requests.forEach(async (request) => {
        const { data, error } = await request();
        if (data) return setState((prev) => prev.push(data));
        setError((prev) =>
          prev.push(error.response?.data?.message || error.message)
        );
      });

      setLoading(false);
    };

    fetchItems();
  }, [requests]);

  return { state, setState, loading, setLoading, error, setError };
};

export default useMultiplyFetch;

import { useState, useEffect } from "react";

function useFetch(url, params, typeMethod, key, id) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await fetch(` ${url}${id}?${key}${params}`, {
          method: typeMethod,
          headers: { "Content-Type": "application/json" },
        });
        const req = await request.json();

        setData(req);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;

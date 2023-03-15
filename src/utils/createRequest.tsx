import { useState, useEffect } from "react";

interface IfetchProps {
  url: string;
  params: string;
  typeMethod: string;
  key: string;
  id: string;
}

interface IfetchData {
  data: any[];
}

function useFetch(props: IfetchProps) {
  const [data, setData] = useState<IfetchData>({ data: [] });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await fetch(
          ` ${props.url}${props.id}?${props.key}${props.params}`,
          {
            method: props.typeMethod,
            headers: { "Content-Type": "application/json" },
          }
        );

        const req = await request.json();
        setData(req);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [props.id, props.key, props.params, props.params, props.url]);

  return { data, error, isLoading };
}

export default useFetch;
export type { IfetchProps };

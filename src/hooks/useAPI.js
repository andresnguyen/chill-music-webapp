import { useEffect, useState } from 'react';

export default function useAPI(params, api) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await api(params);
        setData(result);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }

      setLoading(false);
    })();
  }, [params]);

  return { data, loading };
}

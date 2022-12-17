import {useEffect, useState} from 'react';

interface Props<T> {
  fetchFn: () => Promise<T>;
}
export const useFetchData = <T>({fetchFn}: Props<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchFn()
      .then(response => setData(response))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    hasError,
  };
};

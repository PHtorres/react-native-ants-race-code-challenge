import {useEffect, useState} from 'react';

interface Props<T> {
  fetchFn: () => Promise<T>;
  onSuccess: (data: T) => void;
}
export const useFetchData = <T>({fetchFn, onSuccess}: Props<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchFn()
      .then(response => {
        setData(response);
        onSuccess(response);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    hasError,
  };
};

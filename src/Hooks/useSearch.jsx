import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useSearch = (query) => {
  const { data, error, isLoading } = useSWR(`/content/search?query=${query}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useSearch;
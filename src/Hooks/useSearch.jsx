import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useSearch = (query, page) => {
  const { data, error, isLoading } = useSWR(`/content/search?query=${query}&page=${page}`, fetcher, {
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
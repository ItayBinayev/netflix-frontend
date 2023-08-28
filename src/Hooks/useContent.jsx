import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useContent = (id) => {
  const { data, error, isLoading } = useSWR(`/content/id/${id}`, fetcher, {
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

export default useContent;
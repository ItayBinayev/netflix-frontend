import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useFavourite = () => {
  const { data, error, isLoading } = useSWR(`/users/mylist`, fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useFavourite;
import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/content/random", fetcher, {
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

export default useBillboard;
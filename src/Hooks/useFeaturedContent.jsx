import React from 'react'
import useSWR from "swr";
import fetcher from '../libs/fetcher';


const useFeaturedContent = () => {
    const { data , error , isLoading } = useSWR("/content/featured" , fetcher,{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    }
    )
    
  return {
    data,
    error,
    isLoading
  }
}

export default useFeaturedContent
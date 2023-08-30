import React, { useState } from "react";
import useSearch from "../../Hooks/useSearch";
import { useLocation } from "react-router-dom";
import ContentCard from "../../Components/ContentCard/ContentCard";
import NetflixSpinner from "../../Components/NetflixSpinner/NetflixSpinner";

const SearchPage = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get("query");
  const { data, error, isLoading } = useSearch(query);
  console.log(data);

  return (
    <>
      <div className="h-24"></div>
      <h1 className="text-white text-2xl mt-20 mx-8">Showing results of: "{query}"</h1>
      <div className="grid grid-cols-4 gap-2 mt-2 mx-10 lg:mx-16">
        {isLoading ? (
          <div>
            <NetflixSpinner/>
          </div>
        ) : error ? (
          <h1>Error...</h1>
        ) : (
          data &&
          data.contents.map((c) => (
            <div>
              <ContentCard data={c} />
            </div>
          ))
        )}

      </div>
    </>
  );
};

export default SearchPage;

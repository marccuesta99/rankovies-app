"use client";

import { searchMovies } from "@/api/movies";
import { MovieResult } from "@/types/movies";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SearchResultItem from "./searchResultsItem";
import { SearchResultItemSkeleton } from "./searchResultsSkeleton";

interface SearchResultsProps {
  isMovie: boolean;
  debouncedSearchText: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  isMovie,
  debouncedSearchText,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Loading state
  const [displayCount, setDisplayCount] = useState(3); // Number of movies to display
  const [searchResults, setSearchResults] = useState<MovieResult[]>([]);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const newResults = await searchMovies(debouncedSearchText, displayCount);
      setSearchResults(newResults);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickMovie = (movieId: number, movieTitle: string) => {
    router.push(`/${isMovie ? "movies" : "tvShows"}/ranking/${movieId}`);
  };

  useEffect(() => {
    if (debouncedSearchText.length > 0) {
      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchText, displayCount]);

  return (
    <div className="w-full min-w-64 bg-white dark:bg-gray-800 overflow-scroll ">
      <ul>
        {searchResults.map((movie, idx) =>
          loading ? (
            <SearchResultItemSkeleton key={`skeleton-${idx}`} />
          ) : (
            <SearchResultItem
              key={movie.id}
              movie={movie}
              handleClickMovie={handleClickMovie}
            />
          )
        )}
      </ul>
      {searchResults.length >= displayCount && (
        <button
          onClick={handleShowMore}
          className="block w-full text-center text-blue-500 hover:underline focus:outline-none dark:text-blue-300 mt-4"
        >
          Show More
        </button>
      )}
    </div>
  );
};

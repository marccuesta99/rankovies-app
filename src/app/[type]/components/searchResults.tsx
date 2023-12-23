import { MovieResult } from '@/types/movies';
import React from 'react';
import SearchResultItem from './searchResultsItem';

interface SearchResultsProps {
  loading: boolean;
  searchResults: MovieResult[];
  handleClickMovie: (movieId: number, movieTitle: string) => void;
  displayCount: number;
  handleShowMore: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  loading,
  searchResults,
  handleClickMovie,
  displayCount,
  handleShowMore,
}) => {
  return (
    <div className='w-full min-w-64 bg-white dark:bg-gray-800 overflow-scroll '>
        <ul>
            {searchResults.map((movie) => (
                loading ? <SearchResultItemSkeleton /> : <SearchResultItem key={movie.id} movie={movie} handleClickMovie={handleClickMovie} />
            ))}
        </ul>
      {searchResults.length >= displayCount && (
        <button
          onClick={handleShowMore}
          className='block w-full text-center text-blue-500 hover:underline focus:outline-none dark:text-blue-300 mt-4'
        >
          Show More
        </button>
      )}
    </div>
  );
};

const SearchResultItemSkeleton = () => (
<div role="status" className="p-1 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-4">
    <div className="flex items-center justify-center h-36 bg-gray-300 rounded w-28 dark:bg-gray-700"/>
    <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
)


export default SearchResults;
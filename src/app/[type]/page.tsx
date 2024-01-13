'use client'
import { searchMovies } from '@/api/movies';
import { MovieResult } from '@/types/movies';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import InputForm from './components/inputForm';
import PopularMovies from './components/popularMovies';
import SearchResults from './components/searchResults';



export default function InputPage({ params }: { params: { type: string } }) {
  const { type } = params;
  const isMovie = type === 'movies';

  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MovieResult[]>([]);
  const [debouncedSearchText] = useDebounce(searchText, 400);
  const [displayCount, setDisplayCount] = useState(3); // Number of movies to display
  const [loading, setLoading] = useState(false); // Loading state

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const newResults = await searchMovies(debouncedSearchText, displayCount);
      setSearchResults(newResults);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClickMovie = (movieId: number, movieTitle: string) => {
    console.log('Clicked Movie ID:', movieId);
    
  };

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    if (debouncedSearchText.length > 0) {
      fetchMovies();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchText, displayCount]);

  return (
    <main className='min-h-screen flex flex-col gap-8 items-center justify-center p-8 dark:bg-gray-900'>
      <div className='flex flex-col h-[500px] min-w-[600px] max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <InputForm
          isMovie={isMovie}
          searchText={searchText}
          handleInputChange={handleInputChange}
        />
       {debouncedSearchText.length === 0 ? <PopularMovies/>
       :<SearchResults
          loading={loading}
          searchResults={searchResults}
          handleClickMovie={handleClickMovie}
          displayCount={displayCount}
          handleShowMore={handleShowMore}
        />}
      </div> 
    </main>
  );
}

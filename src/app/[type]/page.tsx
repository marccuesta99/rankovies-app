'use client'
import { searchMovies } from '@/api/movies'
import { MovieResult } from '@/types/movies'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export default function InputPage ({ params }: {params: {type: string} }) {
  const { type } = params
  const isMovie = type === 'movies'
  const [searchText, setSearchText] = useState<string>('')
  const [searchResults, setSearchResults] = useState<MovieResult[]>([])
  const [debouncedSearchText] = useDebounce(searchText, 400)
  const [displayCount, setDisplayCount] = useState(3) // Number of movies to display

  const fetchMovies = async () => {
    const newResults = await searchMovies(debouncedSearchText, displayCount)
    setSearchResults(newResults)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleClickMovie = (movieId:number, movieTitle:string) => {
    console.log('Clicked Movie ID:', movieId)
    setSearchText(movieTitle) // Set input value to the clicked movie name
    // You can perform further actions with the movie ID here
  }

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 3)
  }

  useEffect(() => {
    if (debouncedSearchText.length > 0) {
      fetchMovies()
    } else {
      setSearchResults([])
    }
  }, [debouncedSearchText, displayCount])

  return (
    <main className='min-h-screen flex flex-col gap-8 items-center justify-center p-8 dark:bg-gray-900'>
      <div className='w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form className='w-full mx-auto flex flex-col items-start'>
          <small className='text-sm text-gray-500 dark:text-gray-100'>
            Enter the {isMovie ? 'movie' : 'TV show'} you're watching or loving right now to reveal its ranking!
          </small>
          <div className='relative z-0 w-full my-5 group'>
            <input
              type='text'
              name='floating_text'
              id='floating_text'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-yellow-400 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer'
              placeholder=' '
              value={searchText}
              onChange={handleInputChange}
              required
            />
            <label
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              {isMovie ? 'Novie title' : 'TV Show title'}
            </label>
          </div>
          {searchResults.length > 0 && (
            <div className='w-full bg-white dark:bg-gray-800 max-h-[300px] overflow-scroll'>
              <ul>
                {searchResults.map((movie) => (
                  <li
                    key={movie.id}
                    className='relative p-2 hover:bg-gray-100 cursor-pointer rounded dark:hover:bg-gray-700 overflow-hidden duration-300 flex items-center'
                    onClick={() => handleClickMovie(movie.id, movie.title)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={movie.title}
                      className='w-20 h-auto mr-4 rounded'
                    />
                    <div className='flex flex-col'>
                      <span className='text-lg font-bold'>{movie.title}</span>
                      <span className='text-sm text-gray-500'>{movie.release_date.slice(0, 4)}</span>

                    </div>
                  </li>
                ))}
              </ul>
              {searchResults.length >= displayCount && (
                <button
                  onClick={handleShowMore}
                  className='block w-full text-center text-blue-500 hover:underline focus:outline-none dark:text-blue-300'
                >
                  Show More
                </button>
              )}
            </div>
          )}
          <button
            type='submit'
            className='mt-4 self-end text-gray-900 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full min-w-[150px] sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500'
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}

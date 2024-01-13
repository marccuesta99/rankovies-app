import { MovieResult } from '@/types/movies';
import React from 'react';

interface SearchResultItemProps {
  movie: MovieResult;
  handleClickMovie: (movieId: number, movieTitle: string) => void;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ movie, handleClickMovie }) => {
  return (
    
    <li
      key={movie.id}
      className='relative p-2 hover:bg-gray-100 cursor-pointer rounded dark:hover:bg-gray-700 overflow-hidden duration-300 flex items-center'
      onClick={() => handleClickMovie(movie.id, movie.title)}
    >
      {/*<Link href='/movies/ranking/[id]' as={`/movies/ranking/${movie.id}`}>*/}
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
        className='w-20 min-h-[100px] mr-4 rounded'
        />
        <div className='flex flex-col'>
          <span className='text-lg font-bold'>{movie.title}</span>
          <span className='text-sm text-gray-500'>{movie.release_date.slice(0, 4)}</span>
        </div>{/*</Link>*/}

    </li>
  );
};

export default SearchResultItem;
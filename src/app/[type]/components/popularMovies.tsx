import { fetchPopularMovies } from '@/api/movies';
import { MovieResult } from '@/types/movies';
import { useEffect, useState } from 'react';

interface PopularMoviesProps {
    handleClickMovie: (movieId: number, movieTitle: string) => void;
}

export function  PopularMovies ({
  handleClickMovie,
}: PopularMoviesProps) {
    const [popularMovies, setPopularMovies] = useState<MovieResult[]>([]);

    useEffect(() => {
        fetchPopularMovies().then((res) => setPopularMovies(res.results));
    }, [])

  return (
    <div className='w-full flex flex-wrap justify-between cursor-pointer'>
        {popularMovies?.slice(0, 10)?.map((movie) => <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
        className='w-24 h-auto rounded p-2 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700 mt-2'
        onClick={() => handleClickMovie(movie.id, movie.title)}
        />) }
    </div>
  );
};

export default PopularMovies;
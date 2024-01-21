import { fetchPopularMovies } from "@/api/movies";
import { MovieResult } from "@/types/movies";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PopularMoviesProps {
  handleClickMovie: (movieId: number, movieTitle: string) => void;
}

export function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState<MovieResult[]>([]);

  useEffect(() => {
    fetchPopularMovies().then((res) => setPopularMovies(res.results));
  }, []);

  return (
    <div className="flex overflow-x-auto space-x-4">
      {popularMovies?.slice(0, 10)?.map((movie) => (
        <Link
          href="/movies/ranking/[id]"
          as={`/movies/ranking/${movie.id}`}
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            className="w-[200px] bg-lime-200 h-auto rounded hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700 mt-2"
          />
        </Link>
      ))}
    </div>
  );
}

export default PopularMovies;

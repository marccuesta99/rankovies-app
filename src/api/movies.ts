import { MovieDetails, MovieResult, MovieSearchResponse } from "@/types/movies";

export const fetchPopularMovies: () => Promise<MovieSearchResponse> =
  async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5NjUzODljYWYxYzQ1YjI4ZmRkYTYwN2QwZTU2YSIsInN1YiI6IjY1NmI3NmVmNGE0YmY2MDBjNTAyMDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGVHFN6pstM1zCjYnTp7gtWZ26Ctc0Js4_JMPdrqgCQ",
      },
      params: {
        region: "es",
      },
    };

    return fetch("https://api.themoviedb.org/3/movie/popular", options).then(
      (res) => res.json()
    );
  };

export const fetchMovieById: (id: number) => Promise<MovieDetails | null> = (
  id: number
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5NjUzODljYWYxYzQ1YjI4ZmRkYTYwN2QwZTU2YSIsInN1YiI6IjY1NmI3NmVmNGE0YmY2MDBjNTAyMDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGVHFN6pstM1zCjYnTp7gtWZ26Ctc0Js4_JMPdrqgCQ",
    },
  };

  return fetch(`https://api.themoviedb.org/3/movie/${id}`, options).then(
    (res) => res.json()
  );
};

export const getMovieProviders = (id: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5NjUzODljYWYxYzQ1YjI4ZmRkYTYwN2QwZTU2YSIsInN1YiI6IjY1NmI3NmVmNGE0YmY2MDBjNTAyMDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGVHFN6pstM1zCjYnTp7gtWZ26Ctc0Js4_JMPdrqgCQ",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers`,
    options
  ).then((res) => res.json());
};

export const getMovieVideos = (id: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5NjUzODljYWYxYzQ1YjI4ZmRkYTYwN2QwZTU2YSIsInN1YiI6IjY1NmI3NmVmNGE0YmY2MDBjNTAyMDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGVHFN6pstM1zCjYnTp7gtWZ26Ctc0Js4_JMPdrqgCQ",
    },
  };

  return fetch(`https://api.themoviedb.org/3/mov/${id}/videos`, options).then(
    (res) => res.json()
  );
};

export async function searchMovies(
  query: string,
  displayCount: number
): Promise<MovieResult[]> {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5NjUzODljYWYxYzQ1YjI4ZmRkYTYwN2QwZTU2YSIsInN1YiI6IjY1NmI3NmVmNGE0YmY2MDBjNTAyMDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGVHFN6pstM1zCjYnTp7gtWZ26Ctc0Js4_JMPdrqgCQ",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data: MovieSearchResponse = await response.json();

    const newResults = data.results ? data.results.slice(0, displayCount) : [];
    return newResults;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

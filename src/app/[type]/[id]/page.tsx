const fetchMovie = (id:string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5NjUzODljYWYxYzQ1YjI4ZmRkYTYwN2QwZTU2YSIsInN1YiI6IjY1NmI3NmVmNGE0YmY2MDBjNTAyMDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGVHFN6pstM1zCjYnTp7gtWZ26Ctc0Js4_JMPdrqgCQ'
    }
  }

  return fetch(`https://api.themoviedb.org/3/movie/${id}`, options).then(res => res.json())
}

export default async function MoviePage ({ params }: {params: {id: string}}) {
  const { id } = params
  const movie = await fetchMovie(id)

  console.log('movie', JSON.stringify(movie, null, 2))

  return (
    <div className='bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-500'>
      <div className='container mx-auto p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <aside className='bg-white dark:bg-gray-800'>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className='object-cover rounded-lg shadow-lg'
            />
          </aside>
          <div>
            <h1 className='text-4xl font-bold mb-4'>{movie.title}</h1>
            <p className='text-gray-600 mb-4'>{movie.tagline}</p>
            <p className='text-lg mb-4'>{movie.overview}</p>
            <p className='text-gray-700 mb-2'>
              Release Date: {new Date(movie.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className='text-gray-700 mb-2'>Runtime: {movie.runtime} minutes</p>
            <p className='text-gray-700 mb-2'>Genres: {movie.genres.map((genre:any) => genre.name).join(', ')}</p>
            <p className='text-gray-700 mb-2'>Average Vote: {movie.vote_average}/10</p>
            <a href={movie.homepage} className='text-blue-500 hover:underline' target='_blank' rel='noopener noreferrer'>
              Watch on Netflix
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

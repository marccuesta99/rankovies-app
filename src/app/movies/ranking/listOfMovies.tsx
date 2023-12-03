const fetchMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ5NjUzODljYWYxYzQ1YjI4ZmRkYTYwN2QwZTU2YSIsInN1YiI6IjY1NmI3NmVmNGE0YmY2MDBjNTAyMDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tGVHFN6pstM1zCjYnTp7gtWZ26Ctc0Js4_JMPdrqgCQ'
    }
  }

  return fetch('https://api.themoviedb.org/3/movie/popular', options).then(res => res.json())
}

export async function ListOfMovies () {
  const movies = await fetchMovies()

  return (

    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Release Date
            </th>
            <th scope='col' className='px-6 py-3'>
              Popularity Rate
            </th>

          </tr>
        </thead>
        <tbody>
          {movies.results.map((movie:any) => (
            <tr key={movie.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                {movie.title}
              </td>
              <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                {movie.release_date}
              </td>
              <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                {movie.vote_average}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

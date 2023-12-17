import { fetchPopularMovies, getMovieProviders } from '@/api/movies'
import Link from 'next/link'

export async function ListOfMovies () {
  const movies = await fetchPopularMovies()

  return (

    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-900 uppercase dark:text-gray-400'>
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
            <th scope='col' className='px-6 py-3'>
              Provider
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.results.map(async (movie:any) => {
            const provider = await getMovieProviders(movie.id)
            return (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' key={movie.id}>
                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  <Link href='/movies/[id]' as={`/movies/${movie.id}`}>{movie.title}</Link>
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  {movie.release_date}
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  {movie.vote_average}
                </td>
                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  {provider.results?.ES?.flatrate?.[0]?.provider_name}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

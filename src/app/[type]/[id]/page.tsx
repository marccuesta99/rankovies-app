import { fetchMovieById, getMovieProviders, getMovieVideos } from '@/api/movies'

import StreamingPlatformSwitcher from './components/platformButtons'

export default async function MoviePage ({ params }: {params: {id: string}}) {
  const { id } = params
  const movie = await fetchMovieById(id)
  const providers = await getMovieProviders(id)
  const videos = await getMovieVideos(id)

  return (
    <div className='bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-500 h-screen'>
      <div className='container mx-auto p-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <aside className='bg-white dark:bg-gray-800'>
            <img
              width={500}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className='object-cover rounded-lg shadow-lg'
            />
          </aside>
          <div>
            <h1 className='text-4xl font-bold mb-4'>{movie.title}</h1>
            <p className='text-gray-600 mb-4'>{movie.tagline}</p>
            <p className='text-lg mb-4'>{movie.overview}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {movie.genres.map((genre: any) => (
                <div key={genre.id} className='bg-gray-200 px-2 py-1 rounded-lg'>
                  {genre.name}
                </div>
              ))}
            </div>
            <div className='text-gray-700 mb-4 flex flex-col gap-2'>
              <p className='font-medium text-gray-400'>
                Release Date: <span className='font-normal text-gray-900'>{new Date(movie.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
              <p className='font-medium text-gray-400'>Runtime: <span className='font-normal text-gray-900'>{movie.runtime} minutes</span></p>
              <p className='font-medium text-gray-400 '>
                Production Country: <span className='font-normal text-gray-900'>{movie.production_countries.map((country: any) => country.name).join(', ')}</span>
              </p>
              <p className='font-medium text-gray-400'>Budget: <span className='font-normal text-gray-900'>${movie.budget.toLocaleString()}</span></p>
            </div>
          </div>
          <div className='p-8 flex flex-col gap-4'>
            <div className='flex flex-col items-center w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4'>
              <p className='text-gray-900 font-bold text-3xl mb-2'>{movie.vote_average}</p>
              <p className='text-gray-500 text-sm'>Average Vote</p>
            </div>
            <div className='flex gap-4'>
              <div className='flex flex-1 flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4'>
                <p className='text-gray-900 font-bold text-3xl mb-2'>{movie.vote_count}</p>
                <p className='text-gray-500 text-sm'>Vote Count</p>
              </div>
              <div className='flex flex-1 flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4'>
                <p className='text-gray-900 font-bold text-3xl mb-2'>{movie.popularity}</p>
                <p className='text-gray-500 text-sm'>Popularity</p>
              </div>
            </div>
            <StreamingPlatformSwitcher platform={providers.results?.ES?.flatrate?.[0]?.provider_name} url={providers.results?.ES?.flatrate?.[0]?.link} />
          </div>
        </div>
      </div>
    </div>
  )
}

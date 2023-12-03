import { ListOfMovies } from './listOfMovies'

export default function MoviesRankingPage () {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <h1 className='text-3xl font-bold text-center'>Top ranked movies</h1>
      <h2 className='text-color-gray text-3xl font-bold text-center'>this week</h2>
      <ListOfMovies />
    </div>
  )
}

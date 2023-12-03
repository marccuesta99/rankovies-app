import Callout from '@/components/callout/callout'
import { ListOfMovies } from './listOfMovies'

export default function MoviesRankingPage () {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Callout>Top ranked this week</Callout>
      <h1 className='text-6xl font-medium text-center m-8  '>Movies</h1>
      <div className='px-8'><ListOfMovies /></div>
    </div>
  )
}

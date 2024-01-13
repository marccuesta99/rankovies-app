import { ListOfMovies } from "../components/listOfMovies";

export default function MoviesRankingPage ({params}: {params: {id: string}}) {
  const id = params?.id;


  return (
    <div className='bg-white dark:bg-gray-900'>
      <h1 className='text-6xl font-medium text-center m-8  '>Movies</h1>
      <div className='px-8'>
        <ListOfMovies id={id} /> 
        </div>
    </div>
  )
}

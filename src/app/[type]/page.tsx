export default function InputPage ({ params }: {params: {type: string} }) {
  const { type } = params
  const isMovie = type === 'movies'

  return (
    <main className='min-h-screen flex flex-col gap-8 items-center justify-center p-8 '>
      <div className='w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form className='w-full mx-auto flex flex-col items-start'>
          <small className='text-sm text-gray-500 dark:text-gray-100'>Enter the {isMovie ? 'movie' : 'TV show'} you're watching or loving right now to reveal its ranking!</small>
          <div className='relative z-0 w-full my-5 group'>
            <input type='text' name='floating_text' id='floating_text' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-yellow-400 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer' placeholder=' ' required />
            <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>{isMovie ? 'Ex: Galidator, Ted ... ' : 'Ex: Game of Thrones, Breaking Bad'}</label>
          </div>
          <button type='submit' className='self-end text-gray-900 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full min-w-[150px] sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500'>Submit</button>
        </form>
      </div>
    </main>
  )
}

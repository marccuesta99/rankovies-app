export function Header({ isMovie }: { isMovie: boolean }) {
  return (
    <header className="p-8 flex flex-col gap-2 items-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {isMovie ? "Movies Ranking" : "TV Shows Ranking"}
      </h1>
      <div className="h-[2px] w-4/12 bg-yellow-500 dark:bg-yellow-300 my-2"></div>
      <p className="text-gray-800 dark:text-gray-300 ">
        Explore and discover the best {isMovie ? "movies" : "TV Shows"} of all
        time!
      </p>
    </header>
  );
}

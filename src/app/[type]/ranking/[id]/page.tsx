import { TypeParams } from "@/types/params";
import { ListOfMovies } from "../components/listOfMovies";
import { Header } from "../components/header";

export default function MoviesRankingPage({
  params,
}: {
  params: { id: string; type: string };
}) {
  const { id, type } = params ?? {};
  const isMovie = type === TypeParams.Movies;

  return (
    <div className="bg-white dark:bg-gray-900 px-8">
      <Header isMovie={isMovie} />
      <ListOfMovies id={id} />
    </div>
  );
}

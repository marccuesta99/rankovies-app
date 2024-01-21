"use client";
import { Card } from "./components/card";
import Footer from "./components/footer";
import PopularMovies from "./components/popularMovies";
import { Section } from "./components/section";

/* export default function InputPage({ params }: { params: { type: string } }) {
  const { type } = params;
  const isMovie = type === "movies";

  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText] = useDebounce(searchText, 400);

  return (
    <main className="min-h-screen flex flex-col gap-8 items-center justify-center p-8 dark:bg-gray-900">
      <div className="flex flex-col h-[500px] min-w-[600px] max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <InputForm
          isMovie={isMovie}
          searchText={searchText}
          handleInputChange={(event) => setSearchText(event.target.value)}
        />
        {debouncedSearchText.length === 0 ? (
          <PopularMovies />
        ) : (
          <SearchResults
            isMovie={isMovie}
            debouncedSearchText={debouncedSearchText}
          />
        )}
      </div>
    </main>
  );
} */

const movieCategories = [
  {
    title: "For a Saturday Night",
    subtitle: "Great movies for a Saturday evening",
  },
  {
    title: "For Sunday Afternoon Naps",
    subtitle: "Perfect movies to watch during a lazy Sunday afternoon nap",
  },
  {
    title: "For Popcorn Moments",
    subtitle: "Movies that are best enjoyed with a bowl of popcorn",
  },
  {
    title: "The Real Gems",
    subtitle: "Movies that are genuinely good",
  },
  {
    title: "Nightmares Await",
    subtitle: "Movies that might give you nightmares",
  },
  {
    title: "Movies with Talking Animals",
    subtitle: "For fans of films featuring animals that speak",
  },
];

export default function InputPage() {
  return (
    <div>
      <div className="p-8">
        <Section
          title="Hot Picks"
          subtitle="Explore the latest sizzling movies in our collection"
        >
          <PopularMovies />
        </Section>

        <Section
          title="Movie Categories"
          subtitle="Explore curated collections based on your preferences."
        >
          <div className="grid grid-cols-3 gap-4">
            {movieCategories.map((category, index) => (
              <Card key={index} {...category} />
            ))}
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

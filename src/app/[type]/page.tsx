"use client";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import InputForm from "./components/inputForm";
import PopularMovies from "./components/popularMovies";
import { SearchResults } from "./components/searchResults";

export default function InputPage({ params }: { params: { type: string } }) {
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
}

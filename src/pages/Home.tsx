import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "John Wick", genre: "action", year: "2018" },
    { id: 2, title: "Parasite", genre: "suspense", year: "2022" },
    { id: 3, title: "The Pursuit of Happiness", genre: "drama", year: "2018" },
    { id: 4, title: "John Wick", genre: "action", year: "2018" },
    { id: 5, title: "Parasite", genre: "suspense", year: "2022" },
    { id: 6, title: "John Wick", genre: "action", year: "2018" },
    { id: 7, title: "Parasite", genre: "suspense", year: "2022" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const searchMovie = (e: any) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <main className="max-h-screen">
      <form onSubmit={searchMovie} className="p-4">
        <input
          placeholder="Search a movie"
          className="border-1 bg-[#38BDF8]"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit" className="bg-[#38BDF8] px-3 py-1">Search</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
};

export default Home;

import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies, searchMovie } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movieList = await fetchPopularMovies();
        setMovies(movieList);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    loadMovies();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const searchMovieByQuery = (e: any) => {
    e.preventDefault();
    const searchAMovie = async () => {
      try {
        const movieList = await searchMovie(searchQuery);
        console.log(movieList);
        setMovies(movieList);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    searchAMovie();
    console.log(searchQuery);
  };

  return (
    <main className="max-h-full">
      <form onSubmit={searchMovieByQuery} className="p-4">
        <input
          placeholder="Search a movie"
          className="border-1 bg-[#38BDF8]"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit" className="bg-[#38BDF8] px-3 py-1">
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {movies.map((movie: any) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
};

export default Home;

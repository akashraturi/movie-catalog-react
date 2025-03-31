import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies, searchMovie } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const movieList = await fetchPopularMovies();
        if(movieList) setMovies(movieList);
        else setError("Failed to load movies..");
      } catch (error) {
        setError("Failed to load movies..");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    console.log(error);

    loadMovies();
  }, []);

  const searchMovieByQuery = (e: any) => {
    e.preventDefault();
    const searchAMovie = async () => {
      try {
        setLoading(true);
        const movieList = await searchMovie(searchQuery);
        if(movieList) setMovies(movieList);
        else setError("Failed to load movies..");
      } catch (error) {
        setError("Failed to fetch results for selected query");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    searchAMovie();
    console.log(searchQuery);
  };

  return loading ? (
    <h2 className="text-xl text-white p-4">Loading...</h2>
  ) : error ? (
    <h2 className="text-xl text-white p-4">{error}</h2>
  ) : (
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

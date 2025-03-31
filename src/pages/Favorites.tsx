import { useFavoritesContext } from "../contexts/FavoritesContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return favorites.length == 0 ? (
    <h2 className="text-xl text-white p-4">No favorite items here</h2>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 max-h-full">
      {favorites.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Favorites;

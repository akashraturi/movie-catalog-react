import { useFavoritesContext } from "../contexts/FavoritesContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return favorites.length == 0 ? (
    <h2>No favorite items here</h2>
  ) : (
    <div>
      {favorites.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Favorites;

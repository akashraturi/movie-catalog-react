import imageee from "../assets/react.svg";
import { useFavoritesContext } from "../contexts/FavoritesContext";

const MovieCard = ({ movie }: any) => {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoritesContext();

  const toggleFavorite = (e: any) => {
    e.preventDefault();
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="border-2 hover:shadow-lg text-grey-500 bg-[#38BDF8] hover:bg-[#9333EA] hover:scale-105">
      <div id="movie-poster" className="flex justify-between">
        <img src={imageee} alt={movie.title}></img>
        <button
          onClick={(e) => {
            toggleFavorite(e);
          }}
        >
          {isFavorite(movie.id) ? "❤️" : "🤍"}
        </button>
      </div>
      <div id="movie-info">
        <h5>{movie.title}</h5>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;

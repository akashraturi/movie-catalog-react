import { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favorites: [];
  isFavorite: Function;
  addToFavorites: Function;
  removeFromFavorites: Function;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    let localFavs = window.localStorage.getItem("favorites");
    if (localFavs) setFavorites(JSON.parse(localFavs));
  }, []);

  const setLocalStorage = (favs: any) => {
    window.localStorage.setItem("favorites", JSON.stringify(favs));
    console.log(favs);
  };

  const addToFavorites = (movie: any) => {
    const newFavs = [...favorites, movie];
    setFavorites(newFavs);
    setLocalStorage(newFavs);
  };

  const removeFromFavorites = (movieId: any) => {
    const newFavs = favorites.filter((movie: any) => movie.id !== movieId);
    setFavorites(newFavs);
    setLocalStorage(newFavs);
  };

  const isFavorite = (movieId: any) => {
    return favorites.some((movie: any) => movie.id === movieId);
  };

  const value: FavoritesContextType = {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext<any>(FavoritesContext);

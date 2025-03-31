const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovie = async (searchQuery: string) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(searchQuery)}`
  );
  const data = await response.json();
  return data.results;
};

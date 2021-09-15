import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=21a7deb1b9369ad1d4b77cf264397bff&sort_by=popularity.desc&page=1";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    requestMovies(FEATURED_API);
  }, []);

  async function requestMovies(API) {
    try {
      const moviesRes = await fetch(API);
      const moviesJson = await moviesRes.json();
      // console.log(moviesJson);
      setMovies(moviesJson.results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default HomePage;

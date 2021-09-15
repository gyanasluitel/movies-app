import { useState } from "react";
import MovieCard from "./MovieCard";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=21a7deb1b9369ad1d4b77cf264397bff&query=";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      requestMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

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
    <div>
      <form className="browse-form" onSubmit={handleSubmit}>
        <input
          className="browse-input"
          type="text"
          placeholder="Search a movie"
          value={searchTerm}
          onChange={handleChange}
        />

        <button className="browse-button">Submit</button>
      </form>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Browse;

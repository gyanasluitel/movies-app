import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import home from "./logos/home.png";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    requestMovies(FEATURED_API);
  }, []);

  async function requestMovies(API) {
    const moviesRes = await fetch(API);
    const moviesJson = await moviesRes.json();
    console.log(moviesJson);
    setMovies(moviesJson.results);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      requestMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App root-container">
      <header>
        <img
          className="home-icon"
          src={home}
          alt="homepage"
          onClick={() => requestMovies(FEATURED_API)}
        />
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default App;

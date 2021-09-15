import { Link } from "react-router-dom";
import MovieLogo from "../logos/movie.jpg";
import MovieControls from "./MovieControls";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const WatchListCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="img-card">
          <img
            src={movie.poster_path ? IMG_API + movie.poster_path : MovieLogo}
            alt={movie.title}
          />
        </div>
      </Link>
      <h4>{movie.title}</h4>
      <p className="movie-date">
        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
      </p>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default WatchListCard;

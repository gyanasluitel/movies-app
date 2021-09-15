import { Link } from "react-router-dom";
import MovieLogo from "../logos/movie.jpg";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="img-card">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={movie.poster_path ? IMG_API + movie.poster_path : MovieLogo}
            alt={movie.title}
          />
        </Link>
      </div>
      <h4>{movie.title}</h4>
      <p className="movie-date">
        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
      </p>
    </div>
  );
};

export default MovieCard;

import MovieLogo from "../../logos/movie.jpg";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const SimilarMovieCard = ({ movie }) => {
  return (
    <div className="similar-movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="similar-movie-img-card">
          <img
            src={movie.poster_path ? IMG_API + movie.poster_path : MovieLogo}
            alt={movie.title}
          />
        </div>
      </Link>
    </div>
  );
};

export default SimilarMovieCard;

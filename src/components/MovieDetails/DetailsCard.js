import MovieLogo from "../../logos/movie.jpg";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const DetailsCard = ({ movie }) => {
  return (
    <div className="details-card">
      <div className="details-img-card">
        <img
          src={movie.poster_path ? IMG_API + movie.poster_path : MovieLogo}
          alt={movie.title}
        />
      </div>
    </div>
  );
};

export default DetailsCard;

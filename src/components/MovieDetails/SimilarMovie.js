import SimilarMovieCard from "./SimilarMovieCard";

const SimilarMovie = ({ similarMovie }) => {
  return (
    <div className="similar-movie-container">
      <p>Similar Movies</p>
      {console.log(similarMovie)}
      <div className="similar-movie-card-container">
        {similarMovie.results.slice(0, 4).map((movie) => (
          <SimilarMovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovie;

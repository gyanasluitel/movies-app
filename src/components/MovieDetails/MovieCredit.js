const MovieCredit = ({ credits }) => {
  return (
    <div className="movie-credit-container">
      <p className="cast-heading">Cast</p>
      {credits.cast.slice(0, 5).map((cast) => (
        <p className="movie-cast" key={cast.id}>
          {cast.name}
        </p>
      ))}
    </div>
  );
};

export default MovieCredit;

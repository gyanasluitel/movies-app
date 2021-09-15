import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromPlanToWatch,
    addMovieToWatched,
    moveMovieToPlanToWatch,
    removeMovieFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "planToWatch" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            Add to Watched
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromPlanToWatch(movie.id)}
          >
            Remove
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveMovieToPlanToWatch(movie)}
          >
            Add to Plan To Watch
          </button>
          <button
            className="ctrl-btn remove"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;

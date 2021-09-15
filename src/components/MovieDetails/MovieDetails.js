import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../../context/GlobalState";
import { BiTime } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Loader from "react-loader-spinner";
import DetailsCard from "./DetailsCard";
import MovieCredit from "./MovieCredit";
import SimilarMovie from "./SimilarMovie";

const MovieDetails = () => {
  const {
    addMovieToPlanToWatch,
    addMovieToWatched,
    moveMovieToPlanToWatch,
    planToWatch,
    watched,
  } = useContext(GlobalContext);
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [similarMovie, setSimilarMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=21a7deb1b9369ad1d4b77cf264397bff`;

  const CREDITS_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=21a7deb1b9369ad1d4b77cf264397bff`;

  const SIMILAR_MOVIE_API = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=21a7deb1b9369ad1d4b77cf264397bff`;

  useEffect(() => {
    requestMovieDetail(MOVIE_API, CREDITS_API, SIMILAR_MOVIE_API);
  }, [MOVIE_API, CREDITS_API, SIMILAR_MOVIE_API]);

  async function requestMovieDetail(MOVIE_API, CREDITS_API, SIMILAR_MOVIE_API) {
    try {
      const movieRes = await fetch(MOVIE_API);
      const movieJson = await movieRes.json();
      const creditRes = await fetch(CREDITS_API);
      const creditJson = await creditRes.json();
      const similarMovieRes = await fetch(SIMILAR_MOVIE_API);
      const similarMovieJson = await similarMovieRes.json();

      setMovie(movieJson);
      setCredits(creditJson);
      setSimilarMovie(similarMovieJson);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const { title, overview, genres, release_date, runtime, vote_average } =
    movie;

  let storedMovie = planToWatch.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);
  const planToWatchDisabled = storedMovie ? true : false;

  const status = storedMovie
    ? "Plan To Watch"
    : storedMovieWatched
    ? "Watched"
    : "-";

  return (
    <div>
      {loading ? (
        <div className="loader">
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <div className="details-container">
          <div className="container1">
            <DetailsCard movie={movie} />

            <div className="details-movie">
              <h1>{title}</h1>
              <p className="release-date">{release_date.substring(0, 4)}</p>

              <div className="details-genre">
                {" "}
                {genres.slice(0, 3).map((genre) => (
                  <span key={genre.id} className="genre">
                    {genre.name}/
                  </span>
                ))}
              </div>

              <p>
                <span className="icons">
                  <FaRegHeart />
                </span>
                {vote_average}
              </p>

              <p>
                <span className="icons">
                  <BiTime />
                </span>
                {runtime} minutes
              </p>

              <p>
                <span className="icons">
                  <FaEye />
                </span>{" "}
                {status}
              </p>

              <div className="controls">
                <button
                  className="btn-controls "
                  disabled={planToWatchDisabled || storedMovieWatched}
                  onClick={() => addMovieToPlanToWatch(movie)}
                >
                  Add to Plan To Watch
                </button>

                {storedMovieWatched ? (
                  <button
                    className="btn-controls"
                    disabled={planToWatchDisabled}
                    onClick={() => moveMovieToPlanToWatch(movie)}
                  >
                    Move to Plan To Watch
                  </button>
                ) : (
                  <button
                    className="btn-controls"
                    disabled={storedMovieWatched}
                    onClick={() => addMovieToWatched(movie)}
                  >
                    Add to Watched
                  </button>
                )}

                {/* <button
                  className="btn-controls"
                  disabled={storedMovieWatched}
                  onClick={() => addMovieToWatched(movie)}
                >
                  Add to Watched
                </button>

                <button
                  className="btn-controls"
                  disabled={planToWatchDisabled}
                  onClick={() => moveMovieToPlanToWatch(movie)}
                >
                  Move to Plan To Watch
                </button> */}
              </div>
            </div>
            <div className="synopsis-cast">
              <div className="movie-overview">
                <span>Synopsis</span>
                <p>{overview}</p>
              </div>

              <MovieCredit credits={credits} />
            </div>
          </div>

          <div className="movie-extras">
            <SimilarMovie similarMovie={similarMovie} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

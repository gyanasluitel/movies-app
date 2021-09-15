import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  planToWatch: localStorage.getItem("planToWatch")
    ? JSON.parse(localStorage.getItem("planToWatch"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("planToWatch", JSON.stringify(state.planToWatch));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToPlanToWatch = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_PLAN_TO_WATCH", payload: movie });
  };

  const removeMovieFromPlanToWatch = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_PLAN_TO_WATCH", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveMovieToPlanToWatch = (movie) => {
    dispatch({ type: "MOVE_MOVIE_TO_PLAN_TO_WATCH", payload: movie });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        planToWatch: state.planToWatch,
        watched: state.watched,
        addMovieToPlanToWatch,
        removeMovieFromPlanToWatch,
        addMovieToWatched,
        moveMovieToPlanToWatch,
        removeMovieFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

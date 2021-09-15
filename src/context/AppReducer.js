/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_PLAN_TO_WATCH":
      return {
        ...state,
        planToWatch: [action.payload, ...state.planToWatch],
      };
    case "REMOVE_MOVIE_FROM_PLAN_TO_WATCH":
      return {
        ...state,
        planToWatch: state.planToWatch.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        planToWatch: state.planToWatch.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_MOVIE_TO_PLAN_TO_WATCH":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        planToWatch: [action.payload, ...state.planToWatch],
      };
    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

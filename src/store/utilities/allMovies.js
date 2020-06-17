import axios from "axios";

// ACTION TYPES
const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";

// ACTION CREATORS
const fetchAllMovies = (movies) => {
  return {
    type: FETCH_ALL_MOVIES,
    payload: movies,
  };
};

// THUNKS
export const fetchAllMoviesThunk = () => (dispatch) => {
  return axios
    .get("/api/movies")
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
      dispatch(fetchAllMovies(movies));
    })
    .catch((error) => console.log(error));
};

export const searchForMoviesThunk = (wholeUrl) => (dispatch) => {
  return axios
    .get(wholeUrl)
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
      dispatch(fetchAllMovies(movies));
    });
};

// REDUCERS
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

import axios from "axios";

// ACTION TYPES
const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";
const SEARCH_MOVIES = "SEARCH_MOVIES";

// ACTION CREATORS
const fetchAllMovies = (movies) => {
  return {
    type: FETCH_ALL_MOVIES,
    payload: movies,
  };
};

const searchMovies = (movies) => {
  return {
    type: SEARCH_MOVIES,
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

export const searchForMoviesThunk = (searchTerm) => (dispatch) => {
  console.log(searchTerm);
  return axios
    .get(`/api/movies/search/${searchTerm}`)
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
      dispatch(searchMovies(movies.results));
    })
    .catch((error) => console.log(error));
};

// REDUCERS
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      return action.payload;
    case SEARCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

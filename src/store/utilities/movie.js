import axios from "axios";

const BASE_URL = "https://ezflix-server.herokuapp.com";

// ACTION TYPES
const FETCH_MOVIE = "FETCH_MOVIE";

// ACTION CREATORS
const fetchMovie = (movie) => {
  return {
    type: FETCH_MOVIE,
    payload: movie,
  };
};

// THUNKS
export const fetchMovieThunk = (id) => (dispatch) => {
  return axios
    .get(`${BASE_URL}/api/movies/${id}`, { withCredentials: true })
    .then((res) => res.data)
    .then((movie) => dispatch(fetchMovie(movie)))
    .catch((err) => console.log(err));
};

// REDUCERS
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

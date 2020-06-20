import axios from "axios";

// ACTION TYPES
const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";
const SEARCH_MOVIES = "SEARCH_MOVIES";
const BY_GENRE = "BY_GENRE";

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

const byGenre = (movies) => {
  return {
    type: BY_GENRE,
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

export const byGenreThunk = (id) => (dispatch) => {
  console.log(id);
  return axios
    .get(`/api/movies/search/genre/${id}`)
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
      dispatch(byGenre(movies.results));
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
    case BY_GENRE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

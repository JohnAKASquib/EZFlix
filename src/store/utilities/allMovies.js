import axios from "axios";

const BASE_URL = "https://ezflix-server.herokuapp.com";

// ACTION TYPES
const FETCH_ALL_MOVIES = "FETCH_ALL_MOVIES";
const SEARCH_MOVIES = "SEARCH_MOVIES";
const BY_GENRE = "BY_GENRE";
const BY_GENRE_AND_TERM = "BY_GENRE_AND_TERM";

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

const byGenreandTerm = (movies) => {
  return {
    type: BY_GENRE_AND_TERM,
    payload: movies,
  };
};

// THUNKS
export const fetchAllMoviesThunk = () => (dispatch) => {
  return axios
    .get(`${BASE_URL}/api/movies`, { withCredentials: true })
    .then((res) => res.data)
    .then((movies) => {
      dispatch(fetchAllMovies(movies));
    })
    .catch((error) => console.log(error));
};

export const searchForMoviesThunk = (searchTerm, ownProps) => (dispatch) => {
  console.log(searchTerm);
  return axios
    .get(`${BASE_URL}/api/movies/search/${searchTerm}`, { withCredentials: true })
    .then((res) => res.data)
    .then((movies) => {
      dispatch(searchMovies(movies.results));
      ownProps.history.push("/search");
    })
    .catch((error) => console.log(error));
};

export const byGenreThunk = (id, ownProps) => (dispatch) => {
  console.log(id);
  return axios
    .get(`${BASE_URL}/api/movies/search/genre/${id}`, { withCredentials: true })
    .then((res) => res.data)
    .then((movies) => {
      dispatch(byGenre(movies.results));
      ownProps.history.push("/search");
    })
    .catch((error) => console.log(error));
};

export const searchByTermAndIdThunk = (term, id, ownProps) => (dispatch) => {
  console.log(term, id);
  return axios
    .get(`${BASE_URL}/api/movies/search/genre/${id}/${term}`, { withCredentials: true })
    .then((res) => res.data)
    .then((movies) => {
      dispatch(byGenreandTerm(movies.results));
      ownProps.history.push("/search");
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
    case BY_GENRE_AND_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

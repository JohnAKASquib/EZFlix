import axios from "axios";

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
    .get("/api/movies")
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
      dispatch(fetchAllMovies(movies));
    })
    .catch((error) => console.log(error));
};

export const searchForMoviesThunk = (searchTerm, ownProps) => (dispatch) => {
  console.log(searchTerm);
  return axios
    .get(`/api/movies/search/${searchTerm}`)
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
      dispatch(searchMovies(movies.results));
      ownProps.history.push("/search");
    })
    .catch((error) => console.log(error));
};

export const byGenreThunk = (id, ownProps) => (dispatch) => {
  console.log(id);
  return axios
    .get(`/api/movies/search/genre/${id}`)
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
      dispatch(byGenre(movies.results));
      ownProps.history.push("/search");
    })
    .catch((error) => console.log(error));
};

export const searchByTermAndIdThunk = (term, id, ownProps) => (dispatch) => {
  console.log(term, id);
  return axios
    .get(`/api/movies/search/genre/${id}/${term}`)
    .then((res) => res.data)
    .then((movies) => {
      console.log(movies);
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

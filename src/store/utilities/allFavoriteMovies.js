import Axios from "axios";

const BASE_URL = "https://ezflix-server.herokuapp.com";

// ACTION TYPES
const FETCH_FAVORITE_MOVIES = "FETCH_FAVORITE_MOVIES";
const ADD_FAVORITE_MOVIE = "ADD_FAVORITE_MOVIE";
const REMOVE_FAVORITE_MOVIE = "REMOVE_FAVORITE_MOVIE";

// ACTION CREATORS
const fetchFavoriteMovies = (movies) => {
  return {
    type: FETCH_FAVORITE_MOVIES,
    payload: movies,
  };
};

const addFavoriteMovie = (movie) => {
  return {
    type: ADD_FAVORITE_MOVIE,
    payload: movie,
  };
};

const removeFavoriteMovie = (movieID) => {
  return {
    type: REMOVE_FAVORITE_MOVIE,
    payload: movieID,
  };
};

// THUNKS
export const fetchFavoriteMoviesThunk = (id) => (dispatch) => {
  return Axios.get(`${BASE_URL}/api/users/${id}/movies`, {
    withCredentials: true,
  })
    .then((res) => res.data)
    .then((movies) => {
      dispatch(fetchFavoriteMovies(movies));
    })
    .catch((error) => console.log(error));
};

export const addFavoriteMovieThunk = (id) => (dispatch) => {
  return Axios.post(
    `${BASE_URL}/api/users/favorite/${id}`,
    {},
    { withCredentials: true }
  )
    .then((movie) => {
      dispatch(addFavoriteMovie(movie));
    })
    .catch((error) => console.log(error));
};

export const removeFavoriteMovieThunk = (userID, movieID) => (dispatch) => {
  return Axios.delete(
    `${BASE_URL}/api/users/${userID}/movies/remove/${movieID}`,
    { withCredentials: true }
  )
    .then((res) => res.data)
    .then(() => dispatch(removeFavoriteMovie(movieID)))
    .catch((error) => console.log(error));
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FAVORITE_MOVIES:
      return action.payload;
    case ADD_FAVORITE_MOVIE:
      return [...state, action.payload];
    case REMOVE_FAVORITE_MOVIE:
      return state.filter((movie) => movie.movieAPIid !== action.payload);
    default:
      return state;
  }
};

export default reducer;

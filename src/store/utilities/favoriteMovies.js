import Axios from "axios";

// ACTION TYPES
const FETCH_FAVORITE_MOVIES = "FETCH_FAVORITE_MOVIES";

// ACTION CREATORS
const fetchFavoriteMovies = (movies) => {
    return {
        type: FETCH_FAVORITE_MOVIES,
        payload: movies
    }
};

// THUNKS
export const fetchFavoriteMoviesThunk = (id) => (dispatch) => {
    return Axios
        .get(`/api/users/${id}/movies`)
        .then((res) => res.data)
        .then((movies) => {
            dispatch(fetchFavoriteMovies(movies));
        })
        .catch((error) => console.log(error));
}

// REDUCER
const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_FAVORITE_MOVIES:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
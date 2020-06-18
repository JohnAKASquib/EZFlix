import Axios from "axios";

// ACTION TYPES
const ADD_FAVORITE_MOVIE = "ADD_FAVORITE_MOVIE";

// ACTION CREATORS
const addFavoriteMovie = (movie) => {
    return {
        type: ADD_FAVORITE_MOVIE,
        payload: movie
    }
};

// THUNKS
export const addFavoriteMovieThunk = (movied, id) => (dispatch) => {
    return Axios
            .post(`/api/users/favorite/${id}`)
            .then((movie) => {
                dispatch(addFavoriteMovie(movie));
            })
            .catch((error) => console.log(error));
}

// REDUCER
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FAVORITE_MOVIE:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;
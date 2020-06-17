import axios from "axios";

// ACTION TYPES
const SIGN_UP = "SIGN_UP";

// ACTION CREATORS
const signUp = (user) => {
    return {
        type: SIGN_UP,
        payload: user,
    }
};

// THUNKS
export const signUpThunk = (email, password) => async (dispatch) => {
    let results;
    try {
        results = axios.post("/auth/signup", {email, password});
    } catch (error) {
        return dispatch(signUp({ error: error }));
    }

    try {
        dispatch(signUp(results.data));
    } catch (error) {
        console.log(error);
    }
};

// REDUCER
const reducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_UP:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
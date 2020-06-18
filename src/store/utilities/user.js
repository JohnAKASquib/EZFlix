import axios from "axios";

// ACTION TYPES
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const FETCH_USER = "FETCH_USER";

// ACTION CREATORS
const signUp = (user) => {
  return {
    type: SIGN_UP,
    payload: user,
  };
};

const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};

const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};

// THUNKS
export const signUpThunk = (email, password) => async (dispatch) => {
  let results;
  try {
    results = axios.post(
      "/auth/signup",
      { email, password },
      { withCredentials: true }
    );
  } catch (error) {
    return dispatch(signUp({ error: error }));
  }

  try {
    dispatch(signUp(results.data));
  } catch (error) {
    console.log(error);
  }
};

export const loginThunk = (email, password) => async (dispatch) => {
  let results;
  try {
    results = await axios.post(
      "/auth/login",
      { email, password },
      { withCredentials: true }
    );
  } catch (error) {
    return dispatch(login({ error: error }));
  }

  try {
    console.log(await results.data);
    dispatch(login(results.data));
  } catch (error) {
    console.log(error);
  }
};

export const logoutThunk = () => async (dispatch) => {
  try {
    await axios.delete("/auth/logout", { withCredentials: true });
    dispatch(logout());
  } catch (error) {
    console.error(error);
  }
};

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/me", { withCredentials: true });
    dispatch(login(res.data || {}));
  } catch (err) {
    console.error(err);
  }
};

// REDUCER
const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default reducer;

import axios from "axios";

const BASE_URL = "https://cuny-capstone-server.herokuapp.com";

// ACTION TYPES
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
// const FETCH_USER = "FETCH_USER";

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

// const fetchUser = (user) => {
//   return {
//     type: FETCH_USER,
//     payload: user,
//   };
// };

// THUNKS
export const signUpThunk = (email, password, imageUrl, ownProps) => async (dispatch) => {
  let results;
  try {
    results = axios.post(
      `${BASE_URL}/auth/signup`,
      { email, password, imageUrl },
      { withCredentials: true }
    );
  } catch (error) {
    return dispatch(signUp({ error: error }));
  }

  try {
    dispatch(signUp(results.data));
    ownProps.history.push("/login");
  } catch (error) {
    console.log(error);
  }
};

export const loginThunk = (email, password, ownProps) => async (dispatch) => {
  let results;
  try {
    results = await axios.post(
      `${BASE_URL}/auth/login`,
      { email, password },
      { withCredentials: true }
    );
  } catch (error) {
    ownProps.history.push("/login");
    return dispatch(login({ error: error }));
  }

  try {
    dispatch(login(results.data));
    ownProps.history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logoutThunk = () => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/auth/logout`, { withCredentials: true });
    dispatch(logout());
  } catch (error) {
    console.error(error);
  }
};

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/auth/me`, { withCredentials: true });
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

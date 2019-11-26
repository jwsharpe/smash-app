import { combineReducers } from "redux";

const INITIAL_STATE = {
  currentUser: {},
  users: [],
  matches: []
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    case "SET_USERS":
      return { ...state, users: payload };
    case "SET_MATCHES":
      return { ...state, matches: payload };
    default:
      return state;
  }
};

export default combineReducers({
  main: reducer
});

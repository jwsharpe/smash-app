import { combineReducers } from "redux";

const data = [
  {
    title: "Public"
  },
  {
    title: "Friends"
  },
  {
    title: "Me"
  },
  {
    title: "Public"
  },
  {
    title: "Friends"
  },
  {
    title: "Me"
  },
  {
    title: "Public"
  },
  {
    title: "Friends"
  },
  {
    title: "Me"
  },
  {
    title: "Public"
  },
  {
    title: "Friends"
  },
  {
    title: "Me"
  },
  {
    title: "Public"
  },
  {
    title: "Friends"
  },
  {
    title: "Me"
  },
  {
    title: "Public"
  },
  {
    title: "Friends"
  },
  {
    title: "Me"
  }
];

const logins = [
  {
    id: "0",
    email: "jeff"
  },
  {
    id: "1",
    email: "john"
  },
  {
    id: "2",
    email: "jacob"
  }
];

const INITIAL_STATE = {
  currentUser: null,
  data: data,
  logins: logins
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

export default combineReducers({
  main: reducer
});

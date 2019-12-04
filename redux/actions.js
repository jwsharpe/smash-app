export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  payload: user
});

export const setUsers = users => {
  users.sort((e, f) => e.id - f.id);
  return {
    type: "SET_USERS",
    payload: users
  };
};

export const setMatches = matches => ({
  type: "SET_MATCHES",
  payload: matches
});

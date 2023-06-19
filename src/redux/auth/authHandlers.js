export const handleAuthPending = state => {
  state.isFetching = true;
};
export const handleAuthFullfiled = (state, { payload }) => {
  state.isFetching = false;
  state.isLoggedIn = true;
  state.user = payload.user;
  state.token = payload.token;
};

export const handleAuthRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};

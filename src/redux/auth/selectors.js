export const selectUser = (state) => state.auth.user
export const selectAuth = (state) => state.auth
export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
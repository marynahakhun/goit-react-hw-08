import { createSlice } from "@reduxjs/toolkit";
import { login, logOut, refreshUser,registration} from "./operations";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        (state.user = {
          name: null,
          email: null,
        }),
          (state.token = null);
        state.isLoggedIn = false;
      })
       .addCase(refreshUser.pending, (state) => {
         
                state.isRefreshing = true;
            })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.token = null;
         state.isRefreshing = false;
      });
  },
});
export const authReducer = slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      });
  },
});

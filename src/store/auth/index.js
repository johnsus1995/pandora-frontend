import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const token = localStorage.getItem("u_tok");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: token ? true : false,
    loading: false,
  },
  reducers: {
    //
  },
  extraReducers: {
    // register
    [actions.register.pending]: (state) => {
      state.loading = true;
    },
    [actions.register.fulfilled]: (state, action) => {
      if (!action.payload?.success) {
        state.loading = false;
        return;
      }
    },
    [actions.register.rejected]: (state) => {
      state.loading = false;
    },
    [actions.login.pending]: (state) => {
      state.loading = true;
    },
    //login
    [actions.login.fulfilled]: (state, action) => {
      if (!action.payload?.success) {
        state.loading = false;
        return;
      }
      const { access_token } = action.payload?.data || {};
      localStorage.setItem("u_tok", access_token);
      state.isAuthenticated = true;
      state.loading = false;
    },
    [actions.login.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
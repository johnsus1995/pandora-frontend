import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "api/user";

export const login = createAsyncThunk(
  "auth/login",
  async (options, store) => {
    const res = await authAPI.login(options);
    if (res.success) {
      store.dispatch({
        type: "user/profile/fulfilled",
        payload: res,
      });
    }
    return res;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async options => {
    const res = await authAPI.register(options);
    return res;
  }
);
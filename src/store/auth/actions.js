import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "api/auth";

export const login = createAsyncThunk("auth/login", async (options) => {
  const res = await authAPI.login(options);
  return res;
});

export const register = createAsyncThunk("auth/register", async (options) => {
  const res = await authAPI.register(options);
  return res;
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "api/user";

export const create = createAsyncThunk(
    "user/create",
    async data => {
      const res = await userAPI.create(data);
      return res;
    }
  );
  
  export const get = createAsyncThunk(
    "user/get",
    async data => {
      const res = await userAPI.get(data);
      return res;
    }
  );
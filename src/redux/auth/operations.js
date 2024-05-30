import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      await api.post("/auth/logout", credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (credentials, thunkAPI) => {
//     try {
//       await api.post("/auth/logout", credentials);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

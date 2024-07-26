import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";
const setHeaderToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearHeaderToken = () => {
  axios.defaults.headers.common["Authorization"] = ``;
};
export const registration = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", userData);
      setHeaderToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", userData);
      setHeaderToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      clearHeaderToken()
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
  const state = thunkAPI.getState();
    const persistedToken =  state.auth.token;
     if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Token not found');
        }

    setHeaderToken(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
   
      return data;
    } catch (error) {
      clearHeaderToken();
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
        
      }
    }
  }
);

/*
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/current");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);*/

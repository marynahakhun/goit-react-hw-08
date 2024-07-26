
import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContact =  createAsyncThunk("contacts/fetchAll",
 async (_, thunkAPI) => {
    try {
      const {data} = await axios.get("/contacts");

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })
    ;
export const addContact =  createAsyncThunk(
  "contacts/addContact",
  async ( {name, number }, thunkAPI) => {
    try {
      const {data} = await axios.post("/contacts", { name, number });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact =  createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
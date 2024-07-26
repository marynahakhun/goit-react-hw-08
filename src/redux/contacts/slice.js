import {  createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./operations"
import {  logOut } from "../auth/operations";


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
    items: [],
    isLoading: false,
    error: null,
  },extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null;
        state.items = action.payload
          
      })
      .addCase(fetchContact.rejected, handleRejected)
      
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idToDelete = action.payload;
      state.items = state.items.filter(contact => contact.id !== idToDelete);
      })
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.error = null;
                state.loading = false;
            });

  },
         } 

)



export const contactReducer = contactSlice.reducer;
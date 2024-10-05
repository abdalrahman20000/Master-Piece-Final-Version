import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContactMessages = createAsyncThunk('contact/fetchMessages', async () => {
  // console.log("inside contact slice");
  const response = await axios.get('http://localhost:3000/mp/contact/get-messages');
  // console.log(response.data.messages);
  return response.data.messages;
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    messages: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContactMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;
      })
      .addCase(fetchContactMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
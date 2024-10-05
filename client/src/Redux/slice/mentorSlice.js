import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMentors = createAsyncThunk('mentors/fetchMentors', async () => {
  const response = await axios.get('http://localhost:3000/mp/mentor/get-mentors');
  return response.data;
});

export const fetchMentor = createAsyncThunk('mentors/fetchMentor', async () => {
  const response = await axios.get('http://localhost:3000/mp/mentor/get-mentor');
  return response.data;
});

export const updateMentorStatus = createAsyncThunk('mentors/updateStatus', async (mentor_id) => {
  const response = await axios.patch("http://localhost:3000/mp/mentor/mentor-status", { mentor_id });
  return response.data;
});

export const update_accepte = createAsyncThunk('mentors/updateAccepte', async (mentor_id) => {
  const response = await axios.patch("http://localhost:3000/mp/mentor/mentor-accepted", { mentor_id });
  return response.data;
});

const mentorSlice = createSlice({
  name: 'mentors',
  initialState: {
    accepted_mentors: [],
    mentors: [],
    mentor: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMentors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentors = action.payload.mentors;
        state.accepted_mentors = action.payload.accepted_mentors;
      })
      .addCase(fetchMentors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentor = action.payload;
      })
      .addCase(updateMentorStatus.fulfilled, (state, action) => {
        const index = state.mentors.findIndex(mentor => mentor.id === action.payload.id);
        if (index !== -1) {
          state.mentors[index] = action.payload;
        }
      });
  },
});

export default mentorSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSessions = createAsyncThunk('sessions/fetchSessions', async () => {
  // console.log("inside session slice");
  const response = await axios.get('http://localhost:3000/mp/sessions/get-sessions');
  console.log(response.data);
  return response.data;
});

export const updateReserveStatus = createAsyncThunk('sessions/updateReserveStatus', async (session_id) => {
  // console.log("inside session slice");
  const response = await axios.post('http://localhost:3000/mp/sessions/update-reserve-status', { session_id });
  console.log(response.data);
  return response.data;
});

export const updateSessionsHoursCounter = createAsyncThunk('sessions/updateSessionsHoursCounter', async () => {
  // console.log("inside session slice");
  const response = await axios.post('http://localhost:3000/mp/sessions/update-sessions-hours-counter',);
  console.log(response.data);
  return response.data;
});

export const updateSessionsHoursCounterMentor = createAsyncThunk('sessions/updateSessionsHoursCounterMentor', async () => {
  // console.log("inside session slice");
  const response = await axios.post('http://localhost:3000/mp/sessions/update-sessions-hours-counter-mentor',);
  console.log(response.data);
  return response.data;
});

export const stratSessions = createAsyncThunk('sessions/stratSessions', async (formData) => {
  // console.log("inside session slice");
  const response = await axios.post('http://localhost:3000/mp/sessions/start-sessions', { formData });
  console.log(response.data);
  return response.data;
});

export const updateReadyStatus = createAsyncThunk('sessions/updateReadyStatus', async (isReady) => {
  // console.log("inside session slice");
  const response = await axios.post('http://localhost:3000/mp/sessions/update-ready-status', { isReady });
  console.log(response.data);
  return response.data;
});

const sessionSlice = createSlice({
  name: 'sessions',
  initialState: {
    sessions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sessions = action.payload.sessions;
      })
      .addCase(fetchSessions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default sessionSlice.reducer;
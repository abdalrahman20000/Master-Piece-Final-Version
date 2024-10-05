import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // console.log("inside user slice");
  const response = await axios.get('http://localhost:3000/mp/user/get-users');
  return response.data;
});

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  // console.log("inside user slice");
  const response = await axios.get('http://localhost:3000/mp/user/get-user');
  return response.data;
});

export const updateUserStatus = createAsyncThunk('users/updateStatus', async (user_id) => {
  // console.log(user_id);
  const response = await axios.patch("http://localhost:3000/mp/user/user-status", { user_id });
  return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (profileData) => {
  // console.log(profileData);
  const response = await axios.patch("http://localhost:3000/mp/user/update-user", { profileData });
  return response.data;
});

export const fetchMentor = createAsyncThunk('users/fetchMentor', async (id) => {
  const response = await axios.post('http://localhost:3000/mp/user/get-mentor', { id });
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: [],
    mentor: {},
    is_favorite: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentor = action.payload.mentor;
        state.is_favorite = action.payload.mentor;
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      });
  },
});

export default userSlice.reducer;
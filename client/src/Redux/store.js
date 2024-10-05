import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import mentorReducer from './slice/mentorSlice';
import contactReducer from './slice/contactSlice';
import sessionReducer from './slice/sessionSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    mentors: mentorReducer,
    contact: contactReducer,
    sessions: sessionReducer,
  },
});

export default store;
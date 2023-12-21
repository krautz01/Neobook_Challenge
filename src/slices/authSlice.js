import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../api/authAPI.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

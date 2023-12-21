import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Другие редьюсеры вашего приложения могут быть добавлены сюда
  },
});

export default store;
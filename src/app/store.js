import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/chatSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

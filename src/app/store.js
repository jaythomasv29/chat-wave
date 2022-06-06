import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from '../features/chatSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['app/setRoomMessages'],
      ignoredActionPaths: ['payload.timestamp'],
      ignoredPaths: ['app.roomMessages'],
    },
  })
});

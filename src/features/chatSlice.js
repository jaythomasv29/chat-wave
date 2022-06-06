import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
     enterRoom: (state, action) => {
       state.roomId = action.payload.roomId
       state.roomName = action.payload.roomName
     }
  },

});

export const { enterRoom } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRoomId = (state) => state.app.roomId;
export const selectRoomName = (state) => state.app.roomName;

export default appSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const appReducer = createSlice({
  name: 'user',
  initialState: {
    channelId: null,
    channelName: null
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    }
  }
});

export const { setChannelId } = appReducer.actions;

export const selectChannelId = state => state.app.channelId;
export const selectChannelName = state => state.app.channelName;

export default appReducer.reducer;

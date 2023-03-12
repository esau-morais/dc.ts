import { createSlice } from '@reduxjs/toolkit'

export const appReducer = createSlice({
  name: 'user',
  initialState: {
    channelId: null,
    channelName: null
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    }
  }
})

export const { setChannelInfo } = appReducer.actions

export const selectChannelId = (state: any) => state.app.channelId
export const selectChannelName = (state: any) => state.app.channelName

export default appReducer.reducer

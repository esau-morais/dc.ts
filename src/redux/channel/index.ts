import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../user'

type ChannelState = {
  channelId: string | null
  channelName: string | null
}

type SetChannelPayload = {
  channelId: string
  channelName: string
}

const initialState: ChannelState = {
  channelId: null,
  channelName: null
}

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelInfo: (state, action: PayloadAction<SetChannelPayload>) => {
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    }
  }
})

export const { setChannelInfo } = appReducer.actions

export const selectChannelId = (state: RootState) => state.app.channelId
export const selectChannelName = (state: RootState) => state.app.channelName

export default appReducer.reducer

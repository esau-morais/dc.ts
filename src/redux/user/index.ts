import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
  uid: string
  photo: string | null
  email: string | null
  displayName: string | null
}

type UserState = {
  user: User | null
}

export type RootState = {
  user: UserState
  app: {
    channelId: string | null
    channelName: string | null
  }
}

const initialState: UserState = {
  user: null
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    unsetUser: state => {
      state.user = null
    }
  }
})

export const { setUser, unsetUser } = userReducer.actions

export const selectUser = (state: RootState) => state.user.user

export default userReducer.reducer


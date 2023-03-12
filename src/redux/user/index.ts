import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    unsetUser: state => {
      state.user = null
    }
  }
})

export const { setUser, unsetUser } = userReducer.actions

export const selectUser = state => state.user.user

export default userReducer.reducer


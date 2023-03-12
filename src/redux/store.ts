import { configureStore } from '@reduxjs/toolkit'

import appReducer from './channel'
import userReducer from './user'

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  }
})

export default store

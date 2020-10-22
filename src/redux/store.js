import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import appReducer from './channel';

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  }
})

export default store;

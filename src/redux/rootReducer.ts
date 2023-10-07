import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from '@src/redux/slices/appSlice';
import { authReducer } from '@src/redux/slices/authSlice';
import { homeReducer } from '@src/redux/slices/homeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  app: appReducer,
});

export default rootReducer;

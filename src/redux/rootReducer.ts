import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from '@/redux/slices/appSlice';
import { authReducer } from '@/redux/slices/authSlice';
import { homeReducer } from '@/redux/slices/homeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  app: appReducer,
});

export default rootReducer;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from '@src/redux/slices/appSlice';
import { authReducer } from '@src/redux/slices/authSlice';
import { homeReducer } from '@src/redux/slices/homeSlice';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  app: appReducer,
});

type MainReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<MainReducer>(
  rootPersistConfig,
  rootReducer,
);

export default persistedReducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginRequest } from '@src/data/apis/loginApi';
import { RootState } from '@src/redux/store';
import AppData from '@src/types/appData';
import AppError from '@src/types/appError';
import AppLoading from '@src/types/appLoading';

interface AuthState extends AppLoading, AppError, AppData<boolean> {}

const initialState: AuthState = {
  isLoading: false,
  data: null,
  errorMessage: null,
  errorData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkInitApp: (state: AuthState) => {
      state.isLoading = true;
    },
    checkInitAppSuccess: (state: AuthState) => {
      state.isLoading = false;
      state.data = true;
    },
    checkInitAppError: (state: AuthState, action: PayloadAction<AppError>) => {
      state.isLoading = false;
    },
    login: (state: AuthState, action: PayloadAction<LoginRequest>) => {
      state.isLoading = true;
    },
    loginSuccess: (state: AuthState) => {
      state.isLoading = false;
      state.data = true;
    },
    loginError: (state: AuthState, action: PayloadAction<AppError>) => {
      state.isLoading = false;
      state.errorMessage =
        action.payload.errorData?.message ?? action.payload.errorMessage;
    },
    resetMessage: (state: AuthState) => {
      state.errorMessage = null;
    },
    logout: () => initialState,
  },
});

export const loadingSelector = (state: RootState) => state.auth.isLoading;
export const isLoginSelector = (state: RootState) => state.auth.data;
export const errorSelector = (state: RootState) => state.auth.errorMessage;
export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;

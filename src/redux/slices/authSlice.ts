import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginRequest, LoginResponse } from '@/data/apis/loginApi';
import { RootState } from '@/redux/store';
import AppData from '@/types/appData';
import AppError from '@/types/appError';
import AppLoading from '@/types/appLoading';

interface AuthState extends AppLoading, AppError, AppData<LoginResponse> {}

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
    checkInitAppSuccess: (
      state: AuthState,
      action: PayloadAction<LoginResponse>,
    ) => {
      state.isLoading = false;
      state.data = {
        ...state.data,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    },
    checkInitAppError: (state: AuthState, action: PayloadAction<AppError>) => {
      state.isLoading = false;
    },
    login: (state: AuthState, action: PayloadAction<LoginRequest>) => {
      state.isLoading = true;
    },
    loginSuccess: (state: AuthState, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.data = {
        ...state.data,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
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
export const tokenSelector = (state: RootState) => state.auth.data?.token;
export const refreshTokenSelector = (state: RootState) =>
  state.auth.data?.refreshToken;
export const errorSelector = (state: RootState) => state.auth.errorMessage;
export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;

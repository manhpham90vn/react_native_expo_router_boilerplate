import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { LoginApi, LoginRequest, LoginResponse } from '@/data/apis/loginApi';
import {
  clearRefreshToken,
  clearToken,
  getRefreshToken,
  getToken,
  setRefreshToken,
  setToken,
} from '@/data/local/storage';
import { authAction } from '@/redux/slices/authSlice';
import AppError from '@/types/appError';

function* Login(action: PayloadAction<LoginRequest>) {
  try {
    const response: LoginResponse = yield call(LoginApi, action.payload);
    if (response.token && response.refreshToken) {
      yield put(authAction.loginSuccess(response));
      yield all([
        call(setToken, response.token),
        call(setRefreshToken, response.refreshToken),
      ]);
    }
  } catch (error) {
    yield put(authAction.loginError(error as AppError));
  }
}

function* GetAuth() {
  try {
    const data: [string, string] = yield all([
      call(getToken),
      call(getRefreshToken),
    ]);
    const result: LoginResponse = {
      token: data[0],
      refreshToken: data[1],
    };
    yield put(authAction.checkInitAppSuccess(result));
  } catch (e) {
    yield put(authAction.checkInitAppError(e as AppError));
  }
}

function* ClearAuth() {
  yield all([call(clearToken), call(clearRefreshToken)]);
}

export default function* authSaga() {
  yield takeLatest(authAction.login.type, Login);
  yield takeLatest(authAction.checkInitApp.type, GetAuth);
  yield takeLatest(authAction.logout.type, ClearAuth);
}

import { PayloadAction } from '@reduxjs/toolkit';
import { LoginApi, LoginRequest, LoginResponse } from '@src/data/apis/loginApi';
import { getToken, setToken } from '@src/data/local/storage';
import { authAction } from '@src/redux/slices/authSlice';
import AppError from '@src/types/appError';
import { call, put, takeLatest } from 'redux-saga/effects';

function* Login(action: PayloadAction<LoginRequest>) {
  try {
    const response: LoginResponse = yield call(LoginApi, action.payload);
    yield call(setToken, response);
    yield put(authAction.loginSuccess());
  } catch (error) {
    yield put(authAction.loginError(error as AppError));
  }
}

function* GetAuth() {
  try {
    const response: LoginResponse = yield call(getToken);
    if (response.token && response.refreshToken) {
      yield put(authAction.checkInitAppSuccess());
    }
  } catch (e) {
    yield put(authAction.checkInitAppError(e as AppError));
  }
}

function* ClearAuth() {
  yield call(setToken, null);
}

export default function* authSaga() {
  yield takeLatest(authAction.login.type, Login);
  yield takeLatest(authAction.checkInitApp.type, GetAuth);
  yield takeLatest(authAction.logout.type, ClearAuth);
}

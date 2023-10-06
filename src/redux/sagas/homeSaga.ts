import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ListApi, ListRequest } from 'src/data/apis/listApi';

import { UserApi } from '@/data/apis/userApi';
import { homeAction } from '@/redux/slices/homeSlice';
import AppError from '@/types/appError';

// @ts-ignore
function* Init(action: PayloadAction<ListRequest>) {
  try {
    const [listResponse, userResponse] = yield all([
      call(ListApi, action.payload),
      call(UserApi),
    ]);
    yield put(homeAction.listApiSuccess(listResponse));
    yield put(homeAction.userApiSuccess(userResponse));
    yield put(homeAction.initDone());
  } catch (error) {
    yield put(homeAction.initError(error as AppError));
  }
}

export default function* homeSaga() {
  yield takeLatest(homeAction.init.type, Init);
}

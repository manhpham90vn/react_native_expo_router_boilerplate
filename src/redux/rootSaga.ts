import { all } from 'redux-saga/effects';

import authSaga from '@/redux/sagas/authSaga';
import homeSaga from '@/redux/sagas/homeSaga';

export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}

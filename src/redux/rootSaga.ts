import authSaga from '@src/redux/sagas/authSaga';
import homeSaga from '@src/redux/sagas/homeSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}

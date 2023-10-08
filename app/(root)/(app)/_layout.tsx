import Loading from '@src/components/loading';
import { useAppDispatch, useAppSelector } from '@src/redux/hooks';
import {
  authAction,
  isLoginSelector,
  loadingSelector,
} from '@src/redux/slices/authSlice';
import { Redirect, Stack } from 'expo-router';
import { useEffect } from 'react';

export default () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(isLoginSelector);
  const loading = useAppSelector(loadingSelector);

  useEffect(() => {
    if (!isLogin) {
      dispatch(authAction.checkInitApp());
    }
  }, [isLogin]);

  if (loading) {
    return <Loading />;
  }

  if (!isLogin) {
    return <Redirect href='(auth)/welcome' />;
  }

  return <Stack />;
};

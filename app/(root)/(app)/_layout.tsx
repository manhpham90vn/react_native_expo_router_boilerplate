import Loading from '@src/components/loading';
import { useAppDispatch, useAppSelector } from '@src/redux/hooks';
import {
  authAction,
  loadingSelector,
  tokenSelector,
} from '@src/redux/slices/authSlice';
import { Redirect, Stack } from 'expo-router';
import { useEffect } from 'react';

export default () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenSelector);
  const loading = useAppSelector(loadingSelector);

  useEffect(() => {
    if (!token) {
      dispatch(authAction.checkInitApp());
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!token) {
    return <Redirect href='(auth)/welcome' />;
  }

  return <Stack />;
};

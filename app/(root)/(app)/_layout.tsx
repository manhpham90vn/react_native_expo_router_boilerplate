import { Redirect, Stack } from 'expo-router';
import { useEffect } from 'react';

import Loading from '@/components/loading';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  authAction,
  loadingSelector,
  tokenSelector,
} from '@/redux/slices/authSlice';

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

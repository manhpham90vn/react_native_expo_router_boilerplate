import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import Loading from '@/components/loading';
import Text from '@/components/text';
import View from '@/components/view';
import useDarkMode from '@/hooks/useDarkMode';
import { useLocate } from '@/hooks/useLocate';
import useTheme from '@/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { appAction } from '@/redux/slices/appSlice';
import { authAction } from '@/redux/slices/authSlice';
import {
  homeAction,
  listSelector,
  loadingSelector,
  userSelector,
} from '@/redux/slices/homeSlice';

const Tab1 = () => {
  const loading = useAppSelector(loadingSelector);
  const responseUser = useAppSelector(userSelector);
  const responseList = useAppSelector(listSelector);
  const dispatch = useAppDispatch();
  const useMode = useDarkMode();
  const backgroundColor = useTheme('primary');
  const color = useTheme('text');
  const locate = useLocate();

  const handleReload = () => {
    dispatch(
      homeAction.init({
        queryParameters: {
          page: 1,
          sort: 'ascending',
        },
      }),
    );
  };

  const toggleTheme = () => {
    const newTheme = useMode === 'dark' ? 'light' : 'dark';
    dispatch(appAction.updateTheme(newTheme));
  };

  const handleLogout = () => {
    dispatch(authAction.logout());
    dispatch(homeAction.reset());
    dispatch(appAction.reset());
  };

  useEffect(() => {
    dispatch(
      homeAction.init({
        queryParameters: {
          page: 1,
          sort: 'ascending',
        },
      }),
    );
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: responseUser?.name ?? 'Home',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor,
          },
          headerTitleStyle: {
            fontFamily: 'MontserratBold',
            color,
          },
          headerTintColor: color,
          headerLeft: () => (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={handleReload}>
                <Text fontFamily='MontserratBold' color='text'>
                  {locate.reload}
                </Text>
              </TouchableOpacity>
              <Text>{'  '}</Text>
              <TouchableOpacity onPress={toggleTheme}>
                <Text fontFamily='MontserratBold' color='text'>
                  {locate.changeTheme}
                </Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Text fontFamily='MontserratBold' color='text'>
                {locate.logout}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      {loading && <Loading />}
      {!loading && (
        <View
          backgroundColor='primary'
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text color='text'>{responseList?.array?.length ?? 0}</Text>
        </View>
      )}
    </>
  );
};

export default Tab1;

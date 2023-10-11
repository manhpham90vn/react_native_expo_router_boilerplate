import Text from '@src/components/common/text';
import View from '@src/components/common/view';
import Loading from '@src/components/loading';
import i18n from '@src/hooks/i18n';
import useDarkMode from '@src/hooks/useDarkMode';
import useTheme from '@src/hooks/useTheme';
import { useAppDispatch, useAppSelector } from '@src/redux/hooks';
import { appAction } from '@src/redux/slices/appSlice';
import { authAction } from '@src/redux/slices/authSlice';
import {
  homeAction,
  listSelector,
  loadingSelector,
  userSelector,
} from '@src/redux/slices/homeSlice';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

const Tab1 = () => {
  const loading = useAppSelector(loadingSelector);
  const responseUser = useAppSelector(userSelector);
  const responseList = useAppSelector(listSelector);
  const dispatch = useAppDispatch();
  const useMode = useDarkMode();
  const backgroundColor = useTheme('primary');
  const color = useTheme('text');

  const handleReload = () => {
    dispatch(
      homeAction.init({
        page: 1,
        sort: 'ascending',
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
        page: 1,
        sort: 'ascending',
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
                  {i18n.t('reload')}
                </Text>
              </TouchableOpacity>
              <Text>{'  '}</Text>
              <TouchableOpacity onPress={toggleTheme}>
                <Text fontFamily='MontserratBold' color='text'>
                  {i18n.t('changeTheme')}
                </Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Text fontFamily='MontserratBold' color='text'>
                {i18n.t('logout')}
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
          <Text color='text'>
            {i18n.t('total', { total: responseList?.array?.length ?? 0 })}
          </Text>
        </View>
      )}
    </>
  );
};

export default Tab1;

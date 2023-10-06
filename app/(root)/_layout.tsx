import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import useDarkMode from '@/hooks/useDarkMode';
import { store } from '@/redux/store';

export default () => {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
};

const RootLayout = () => {
  const useMode = useDarkMode();
  return (
    <>
      <StatusBar style={useMode === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
};

import useDarkMode from '@src/hooks/useDarkMode';
import { store } from '@src/redux/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

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

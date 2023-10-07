import Loading from '@src/components/loading';
import useDarkMode from '@src/hooks/useDarkMode';
import { persistor, store } from '@src/redux/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default () => {
  const [stateLoaded, setStateLoaded] = useState(false);
  const onBeforeLimit = useCallback(() => setStateLoaded(true), []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}
        onBeforeLift={onBeforeLimit}
      >
        {stateLoaded && <RootLayout />}
      </PersistGate>
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

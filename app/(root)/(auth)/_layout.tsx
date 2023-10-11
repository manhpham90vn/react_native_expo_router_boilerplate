import i18n from '@src/hooks/i18n';
import useTheme from '@src/hooks/useTheme';
import { Stack } from 'expo-router';

export default () => {
  const backgroundColor = useTheme('primary');
  const color = useTheme('text');
  return (
    <Stack>
      <Stack.Screen
        name='login'
        options={{
          title: i18n.t('login'),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor,
          },
          headerTitleStyle: {
            fontFamily: 'MontserratBold',
            color,
          },
          headerTintColor: color,
        }}
      />
      <Stack.Screen
        name='register'
        options={{
          title: i18n.t('register'),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor,
          },
          headerTitleStyle: {
            fontFamily: 'MontserratBold',
            color,
          },
          headerTintColor: color,
        }}
      />
      <Stack.Screen
        name='forgot'
        options={{
          title: i18n.t('forgot'),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor,
          },
          headerTitleStyle: {
            fontFamily: 'MontserratBold',
            color,
          },
          headerTintColor: color,
        }}
      />
      <Stack.Screen name='welcome' options={{ headerShown: false }} />
    </Stack>
  );
};

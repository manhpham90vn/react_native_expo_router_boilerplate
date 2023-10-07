import { useLocate } from '@src/hooks/useLocate';
import useTheme from '@src/hooks/useTheme';
import { Stack } from 'expo-router';

export default () => {
  const backgroundColor = useTheme('primary');
  const color = useTheme('text');
  const locate = useLocate();
  return (
    <Stack>
      <Stack.Screen
        name='login'
        options={{
          title: locate.login,
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
          title: locate.register,
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
          title: locate.forgot,
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

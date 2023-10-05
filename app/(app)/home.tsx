import { router, Stack } from 'expo-router';
import { Button, Text, View } from 'react-native';

import Loading from '@/components/loading';

const Home = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Home</Text>
        <Button
          title='Logout'
          onPress={() => {
            router.replace('(auth)');
          }}
        />
      </View>
      <Loading />
    </>
  );
};

export default Home;

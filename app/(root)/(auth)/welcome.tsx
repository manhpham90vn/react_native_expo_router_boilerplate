import Text from '@src/components/text';
import TouchableOpacity from '@src/components/touchableopacity';
import View from '@src/components/view';
import { useLocate } from '@src/hooks/useLocate';
import { router } from 'expo-router';
import { useWindowDimensions } from 'react-native';

const Welcome = () => {
  const { height } = useWindowDimensions();
  const locate = useLocate();

  const handleSignIn = async () => {
    router.push('login');
  };

  const handleSignUp = () => {
    router.push('register');
  };

  return (
    <View backgroundColor='primary' style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <TouchableOpacity
          backgroundColor='button'
          style={{
            marginTop: height * 0.7,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          onPress={handleSignIn}
        >
          <Text color='text' fontFamily='MontserratBold'>
            {locate.login}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          backgroundColor='button'
          style={{
            marginTop: 10,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          onPress={handleSignUp}
        >
          <Text color='text' fontFamily='MontserratBold'>
            {locate.register}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

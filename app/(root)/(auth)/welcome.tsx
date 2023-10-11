import View from '@src/components/common/view';
import PrimaryButton from '@src/components/primarybutton';
import i18n from '@src/hooks/i18n';
import { router } from 'expo-router';
import { useWindowDimensions } from 'react-native';

const Welcome = () => {
  const { height } = useWindowDimensions();

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
        <PrimaryButton
          style={{
            marginTop: height * 0.7,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          text={i18n.t('login')}
          onPress={handleSignIn}
        />

        <PrimaryButton
          style={{
            marginTop: 10,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          text={i18n.t('register')}
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
};

export default Welcome;

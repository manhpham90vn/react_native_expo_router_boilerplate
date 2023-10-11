import View from '@src/components/common/view';
import PrimaryButton from '@src/components/primarybutton';
import PrimaryEditText from '@src/components/primaryedittext';
import i18n from '@src/hooks/i18n';
import { useWindowDimensions } from 'react-native';

const Register = () => {
  const { height } = useWindowDimensions();

  const handleRegister = () => {
    console.log('register');
  };

  return (
    <View backgroundColor='primary' style={{ flex: 1 }}>
      <View
        style={{ marginTop: height * 0.1, marginLeft: 20, marginRight: 20 }}
      >
        <PrimaryEditText
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
          }}
          keyboardType='email-address'
          placeholder={i18n.t('email')}
        />

        <PrimaryEditText
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          secureTextEntry
          placeholder={i18n.t('password')}
        />

        <PrimaryEditText
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          secureTextEntry
          placeholder={i18n.t('confirm_password')}
        />

        <PrimaryButton
          style={{
            marginTop: 20,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          onPress={handleRegister}
          text={i18n.t('register')}
        />
      </View>
    </View>
  );
};

export default Register;

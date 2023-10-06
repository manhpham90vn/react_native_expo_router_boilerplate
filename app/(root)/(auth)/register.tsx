import { useWindowDimensions } from 'react-native';

import Text from '@/components/text';
import TextInput from '@/components/textinput';
import TouchableOpacity from '@/components/touchableopacity';
import View from '@/components/view';
import { useLocate } from '@/hooks/useLocate';

const Register = () => {
  const { height } = useWindowDimensions();
  const locate = useLocate();

  const handleRegister = () => {
    console.log('register');
  };

  return (
    <View backgroundColor='primary' style={{ flex: 1 }}>
      <View
        style={{ marginTop: height * 0.1, marginLeft: 20, marginRight: 20 }}
      >
        <TextInput
          color='text'
          backgroundColor='button'
          fontFamily='MontserratRegular'
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
          }}
          keyboardType='email-address'
          placeholder={locate.email}
        />

        <TextInput
          color='text'
          backgroundColor='button'
          fontFamily='MontserratRegular'
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          secureTextEntry
          placeholder={locate.password}
        />

        <TextInput
          color='text'
          backgroundColor='button'
          fontFamily='MontserratRegular'
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          secureTextEntry
          placeholder={locate.confirm_password}
        />

        <TouchableOpacity
          backgroundColor='button'
          style={{
            marginTop: 20,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          onPress={handleRegister}
        >
          <Text color='text' fontFamily='MontserratBold'>
            {locate.register}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

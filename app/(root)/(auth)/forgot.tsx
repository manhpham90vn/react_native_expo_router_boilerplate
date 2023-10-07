import Text from '@src/components/text';
import TextInput from '@src/components/textinput';
import TouchableOpacity from '@src/components/touchableopacity';
import View from '@src/components/view';
import { useLocate } from '@src/hooks/useLocate';
import { useWindowDimensions } from 'react-native';

const Forgot = () => {
  const { height } = useWindowDimensions();
  const locate = useLocate();
  const handleForgot = () => {
    console.log('reset password');
  };

  return (
    <View backgroundColor='primary' style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          marginTop: height * 0.1,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <TextInput
          backgroundColor='button'
          color='text'
          fontFamily='MontserratRegular'
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
          }}
          keyboardType='email-address'
          placeholder={locate.email}
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
          onPress={handleForgot}
        >
          <Text color='text' fontFamily='MontserratBold'>
            {locate.send_mail}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgot;

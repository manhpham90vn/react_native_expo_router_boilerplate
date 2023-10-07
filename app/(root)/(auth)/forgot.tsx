import View from '@src/components/common/view';
import PrimaryButton from '@src/components/primarybutton';
import PrimaryEditText from '@src/components/primaryedittext';
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
        <PrimaryEditText
          style={{
            height: 50,
            borderRadius: 25,
            paddingHorizontal: 20,
          }}
          placeholder={locate.email}
        />

        <PrimaryButton
          style={{
            marginTop: 20,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}
          onPress={handleForgot}
          text={locate.send_mail}
        />
      </View>
    </View>
  );
};

export default Forgot;

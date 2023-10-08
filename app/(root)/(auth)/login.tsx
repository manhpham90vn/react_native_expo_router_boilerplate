import Text from '@src/components/common/text';
import TouchableOpacity from '@src/components/common/touchableopacity';
import View from '@src/components/common/view';
import Loading from '@src/components/loading';
import PrimaryButton from '@src/components/primarybutton';
import PrimaryEditText from '@src/components/primaryedittext';
import { LoginRequest } from '@src/data/apis/loginApi';
import { useLocate } from '@src/hooks/useLocate';
import { useAppDispatch, useAppSelector } from '@src/redux/hooks';
import {
  authAction,
  errorSelector,
  isLoginSelector,
  loadingSelector,
} from '@src/redux/slices/authSlice';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, useWindowDimensions } from 'react-native';

const Login = () => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('pwd12345');
  const loading = useAppSelector(loadingSelector);
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(isLoginSelector);
  const locate = useLocate();
  const error = useAppSelector(errorSelector);

  const handleSignIn = () => {
    const payload: LoginRequest = {
      body: { email, password },
    };
    dispatch(authAction.login(payload));
  };

  const handleForgotPassword = () => {
    router.push('forgot');
  };

  const handleSignUp = () => {
    router.push('register');
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error, [
        {
          text: 'OK',
          onPress: () => dispatch(authAction.resetMessage()),
        },
      ]);
    }
  }, [error]);

  useEffect(() => {
    if (isLogin) {
      router.replace('(app)');
    }
  }, [isLogin]);

  return (
    <>
      <View backgroundColor='primary' style={{ flex: 1 }}>
        {loading ? (
          <Loading />
        ) : (
          <View
            style={{
              flex: 1,
              marginTop: height * 0.3,
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
              value={email}
              placeholder={locate.email}
              onChangeText={setEmail}
            />

            <PrimaryEditText
              style={{
                height: 50,
                borderRadius: 25,
                paddingHorizontal: 20,
                marginTop: 20,
              }}
              value={password}
              placeholder={locate.password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <PrimaryButton
              style={{
                marginTop: 20,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
              }}
              text={locate.login}
              onPress={handleSignIn}
            />

            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: 'center',
              }}
              onPress={handleForgotPassword}
            >
              <Text color='text' style={{ textAlign: 'center' }}>
                {locate.forgot}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 50,
                justifyContent: 'center',
              }}
            >
              <Text color='text'>{locate.dont_have_account}</Text>
              <Text>{'   '}</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text color='text' fontFamily='MontserratBold'>
                  {locate.register}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Login;

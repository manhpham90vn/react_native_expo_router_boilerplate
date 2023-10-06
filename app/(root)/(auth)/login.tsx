import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

import Loading from '@/components/loading';
import Text from '@/components/text';
import TextInput from '@/components/textinput';
import TouchableOpacity from '@/components/touchableopacity';
import View from '@/components/view';
import { LoginRequest } from '@/data/apis/loginApi';
import { useLocate } from '@/hooks/useLocate';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  authAction,
  loadingSelector,
  tokenSelector,
} from '@/redux/slices/authSlice';

const Login = () => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('pwd12345');
  const loading = useAppSelector(loadingSelector);
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenSelector);
  const locate = useLocate();

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
    if (token) {
      router.replace('(app)');
    }
  }, [token]);

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
            <TextInput
              backgroundColor='button'
              color='text'
              fontFamily='MontserratRegular'
              style={{
                height: 50,
                borderRadius: 25,
                paddingHorizontal: 20,
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType='email-address'
              placeholder={locate.email}
            />

            <TextInput
              backgroundColor='button'
              color='text'
              fontFamily='MontserratRegular'
              style={{
                height: 50,
                borderRadius: 25,
                paddingHorizontal: 20,
                marginTop: 20,
              }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              placeholder={locate.password}
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
              onPress={handleSignIn}
            >
              <Text color='text' fontFamily='MontserratBold'>
                {locate.login}
              </Text>
            </TouchableOpacity>

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

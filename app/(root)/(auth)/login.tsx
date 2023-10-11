import Text from '@src/components/common/text';
import TouchableOpacity from '@src/components/common/touchableopacity';
import View from '@src/components/common/view';
import Loading from '@src/components/loading';
import PrimaryButton from '@src/components/primarybutton';
import PrimaryEditText from '@src/components/primaryedittext';
import { LoginRequest } from '@src/data/apis/loginApi';
import i18n from '@src/hooks/i18n';
import { useAppDispatch, useAppSelector } from '@src/redux/hooks';
import {
  authAction,
  errorSelector,
  isLoginSelector,
  loadingSelector,
} from '@src/redux/slices/authSlice';
import loginValidationSchema from '@src/validation/loginValidationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { Alert, useWindowDimensions } from 'react-native';

const Login = () => {
  const { height } = useWindowDimensions();
  const loading = useAppSelector(loadingSelector);
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(isLoginSelector);
  const error = useAppSelector(errorSelector);
  const initData = {
    email: '',
    password: '',
  };

  const handleSignIn = (data: LoginRequest) => {
    dispatch(authAction.login(data));
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
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={initData}
              onSubmit={(values) => handleSignIn(values)}
            >
              {({ handleChange, handleSubmit, values, errors }) => (
                <>
                  <PrimaryEditText
                    style={{
                      height: 50,
                      borderRadius: 25,
                      paddingHorizontal: 20,
                    }}
                    value={values.email}
                    placeholder={i18n.t('email')}
                    onChangeText={handleChange('email')}
                    keyboardType='email-address'
                  />
                  {errors.email && (
                    <Text style={{ fontSize: 10, color: 'red' }}>
                      {errors.email}
                    </Text>
                  )}
                  <PrimaryEditText
                    style={{
                      height: 50,
                      borderRadius: 25,
                      paddingHorizontal: 20,
                      marginTop: 20,
                    }}
                    value={values.password}
                    placeholder={i18n.t('password')}
                    onChangeText={handleChange('password')}
                    secureTextEntry
                  />
                  {errors.password && (
                    <Text style={{ fontSize: 10, color: 'red' }}>
                      {errors.password}
                    </Text>
                  )}
                  <PrimaryButton
                    style={{
                      marginTop: 20,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 25,
                    }}
                    text={i18n.t('login')}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>

            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: 'center',
              }}
              onPress={handleForgotPassword}
            >
              <Text color='text' style={{ textAlign: 'center' }}>
                {i18n.t('forgot')}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 50,
                justifyContent: 'center',
              }}
            >
              <Text color='text'>{i18n.t('dont_have_account')}</Text>
              <Text>{'   '}</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text color='text' fontFamily='MontserratBold'>
                  {i18n.t('register')}
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

import Configs from '@constants/configs';
import { RefreshTokenApi } from '@src/data/apis/refreshTokenApi';
import { getToken, setToken } from '@src/data/local/storage';
import { authAction } from '@src/redux/slices/authSlice';
import { homeAction } from '@src/redux/slices/homeSlice';
import { StorageType } from '@src/redux/store';
import axios, { AxiosError, AxiosInstance } from 'axios';

let store: StorageType;

export const injectStore = (_store: StorageType) => {
  store = _store;
};

const Logout = async (error: any) => {
  store.dispatch(authAction.logout());
  store.dispatch(homeAction.reset());
  return Promise.reject(error);
};

const RefreshToken = async (error: AxiosError) => {
  if (error.config && error.config.url !== 'refreshToken') {
    const originalRequest = error.config;
    const token = await getToken();
    if (token.refreshToken) {
      try {
        const response = await RefreshTokenApi({
          body: { token: token.refreshToken },
        });
        if (response.token) {
          originalRequest.headers.XXX = 'Bearer ' + response.token;
          await setToken({
            token: response.token,
            refreshToken: token.refreshToken,
          });
          return client.request(originalRequest);
        } else {
          return Logout(error);
        }
      } catch (error) {
        return Logout(error);
      }
    } else {
      return Logout(error);
    }
  } else {
    return Logout(error);
  }
};

const Client = (): AxiosInstance => {
  const client: AxiosInstance = axios.create({
    baseURL: Configs.BASE_URL,
    timeout: Configs.TIME_OUT,
    headers: {
      Accept: 'application/json',
    },
  });

  client.interceptors.request.use(
    async (config) => {
      try {
        const response = await getToken();
        if (response && response.token) {
          config.headers.Authorization = 'Bearer ' + response.token;
          return config;
        }
        return config;
      } catch {
        return config;
      }
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
  client.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        return RefreshToken(error);
      }
      return Promise.reject(error);
    },
  );

  return client;
};

const client = Client();

export default client;

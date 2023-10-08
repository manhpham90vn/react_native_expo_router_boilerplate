import Configs from '@constants/configs';
import RequestPayload from '@src/data/apis/common/requestPayload';
import AppError from '@src/types/appError';
import axios from 'axios';

export interface RefreshTokenRequest extends RequestPayload {
  body: {
    token: string;
  };
}

export interface RefreshTokenResponse {
  token: string | null;
}

export const RefreshTokenApi = async (
  request: RefreshTokenRequest,
): Promise<RefreshTokenResponse> => {
  try {
    const baseUrl = Configs.BASE_URL + 'refreshToken';
    const response = await axios.post(baseUrl, { ...request.body });
    if (response.data && response.data.token) {
      return Promise.resolve(response.data);
    }
    const result: AppError = {
      type: 'RefreshTokenApi',
      errorData: null,
      errorMessage: 'empty data',
    };
    return Promise.reject(result);
  } catch (e) {
    const error = e as AppError;
    const result = { ...error, type: 'RefreshTokenApi' };
    return Promise.reject(result);
  }
};

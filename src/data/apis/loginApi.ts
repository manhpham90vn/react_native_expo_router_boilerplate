import PostRequest from '@src/data/apis/common/postRequest';
import RequestPayload from '@src/data/apis/common/requestPayload';
import AppError from '@src/types/appError';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string | null;
  refreshToken: string | null;
}

export const LoginApi = async (
  request: LoginRequest,
): Promise<LoginResponse> => {
  try {
    const payload: RequestPayload<LoginRequest> = {
      body: request,
      path: 'login',
    };
    const response = await PostRequest<LoginRequest, LoginResponse>(payload);
    if (response.data && response.data.token && response.data.refreshToken) {
      return Promise.resolve(response.data);
    }
    const result: AppError = {
      type: 'LoginApi',
      errorData: null,
      errorMessage: 'empty data',
    };
    return Promise.reject(result);
  } catch (e) {
    const error = e as AppError;
    const result = { ...error, type: 'LoginApi' };
    return Promise.reject(result);
  }
};

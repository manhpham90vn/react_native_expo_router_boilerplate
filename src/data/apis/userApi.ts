import GetRequest from '@src/data/apis/common/getRequest';
import RequestPayload from '@src/data/apis/common/requestPayload';
import AppError from '@src/types/appError';

export interface UserResponse {
  email: string | null;
  name: string | null;
  date: string | null;
}

export const UserApi = async (): Promise<UserResponse> => {
  try {
    const payload: RequestPayload<any> = {
      path: 'user',
    };
    const response = await GetRequest<null, UserResponse>(payload);
    if (response.data) {
      return Promise.resolve(response.data);
    }
    const result: AppError = {
      type: 'UserApi',
      errorData: null,
      errorMessage: 'empty data',
    };
    return Promise.reject(result);
  } catch (e) {
    const error = e as AppError;
    const result = { ...error, type: 'UserApi' };
    return Promise.reject(result);
  }
};

import client from '@src/data/apis/common/client';
import RequestPayload from '@src/data/apis/common/requestPayload';
import RequestResponse from '@src/data/apis/common/requestResponse';
import AppError from '@src/types/appError';
import axios from 'axios/index';

const PostRequest = async <T>(
  path: string,
  requestData: RequestPayload,
): Promise<RequestResponse<T>> => {
  try {
    const response = await client.post<T>(
      path,
      { ...requestData.body },
      { headers: requestData.headers },
    );
    const result: RequestResponse<T> = {
      data: response.data,
      status: response.status,
    };
    return Promise.resolve(result);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const result: AppError = {
        errorData: e.response?.data,
        errorMessage: e.message,
      };
      return Promise.reject(result);
    } else {
      const result: AppError = {
        errorData: null,
        errorMessage: 'unexpected error',
      };
      return Promise.reject(result);
    }
  }
};

export default PostRequest;

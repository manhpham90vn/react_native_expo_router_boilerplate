import GetRequest from '@src/data/apis/common/getRequest';
import RequestPayload from '@src/data/apis/common/requestPayload';
import AppError from '@src/types/appError';

export interface ListRequest {
  page: number;
  sort: string;
}

export interface ListResponse {
  array: UserListResponse[] | null;
}

export interface UserListResponse {
  id: number | null;
  name: string | null;
  age: number | null;
  website: string | null;
  type: string | null;
}

export const ListApi = async (request: ListRequest): Promise<ListResponse> => {
  try {
    const payload: RequestPayload<any> = {
      queryParameters: request,
      path: 'paging',
    };
    const response = await GetRequest<ListRequest, ListResponse>(payload);
    if (response.data) {
      return Promise.resolve(response.data);
    }
    const result: AppError = {
      type: 'ListApi',
      errorData: null,
      errorMessage: 'empty data',
    };
    return Promise.reject(result);
  } catch (e) {
    const error = e as AppError;
    const result = { ...error, type: 'ListApi' };
    return Promise.reject(result);
  }
};

import { LoginResponse } from '@src/data/apis/loginApi';
import { getObjectData, setObjectData } from '@src/data/local/asyncStorage';
import StorageConstants from '@src/data/local/storageConstants';

export const setToken = async (value: LoginResponse | null) => {
  return await setObjectData(StorageConstants.token, value);
};

export const getToken = async () => {
  return await getObjectData(StorageConstants.token);
};

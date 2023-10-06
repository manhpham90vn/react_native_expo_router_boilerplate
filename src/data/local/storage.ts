import {
  clearStringData,
  getStringData,
  setStringData,
} from '@/data/local/asyncStorage';
import StorageConstants from '@/data/local/storageConstants';

export const setToken = async (value: string) => {
  return await setStringData(StorageConstants.token, value);
};

export const getToken = async () => {
  return await getStringData(StorageConstants.token);
};

export const clearToken = async () => {
  return await clearStringData(StorageConstants.token);
};

export const setRefreshToken = async (value: string) => {
  return await setStringData(StorageConstants.refreshToken, value);
};

export const getRefreshToken = async () => {
  return await getStringData(StorageConstants.refreshToken);
};

export const clearRefreshToken = async () => {
  return await clearStringData(StorageConstants.refreshToken);
};

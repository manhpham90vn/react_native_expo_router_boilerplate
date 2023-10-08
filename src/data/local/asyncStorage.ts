import AsyncStorage from '@react-native-async-storage/async-storage';
import AppError from '@src/types/appError';

export const getStringData = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return Promise.resolve(value);
    }
    const result: AppError = { errorMessage: 'empty data', errorData: null };
    return Promise.reject(result);
  } catch {
    const result: AppError = {
      errorData: null,
      errorMessage: 'unexpected error',
    };
    return Promise.reject(result);
  }
};

export const setStringData = async (
  key: string,
  value: string | null,
): Promise<void> => {
  try {
    if (value) {
      return await AsyncStorage.setItem(key, value);
    }
    return await AsyncStorage.removeItem(key);
  } catch {
    const result: AppError = {
      errorData: null,
      errorMessage: 'unexpected error',
    };
    return Promise.reject(result);
  }
};

export const getObjectData = async <T>(key: string): Promise<T> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      const json = JSON.parse(value) as T;
      return Promise.resolve(json);
    }
    const result: AppError = { errorMessage: 'empty data', errorData: null };
    return Promise.reject(result);
  } catch {
    const result: AppError = {
      errorData: null,
      errorMessage: 'unexpected error',
    };
    return Promise.reject(result);
  }
};

export const setObjectData = async (
  key: string,
  value: object | null,
): Promise<void> => {
  try {
    if (value) {
      const json = JSON.stringify(value);
      return await AsyncStorage.setItem(key, json);
    }
    return await AsyncStorage.removeItem(key);
  } catch {
    const result: AppError = {
      errorData: null,
      errorMessage: 'unexpected error',
    };
    return Promise.reject(result);
  }
};

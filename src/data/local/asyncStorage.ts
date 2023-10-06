import AsyncStorage from '@react-native-async-storage/async-storage';

import AppError from '@/types/appError';

export const getStringData = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return Promise.resolve(value);
    }
    const result: AppError = { errorMessage: 'empty data', errorData: null };
    return Promise.reject(result);
  } catch (e) {
    const result: AppError = {
      errorData: e,
      errorMessage: null,
    };
    return Promise.reject(result);
  }
};

export const setStringData = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    const result: AppError = {
      errorData: e,
      errorMessage: null,
    };
    return Promise.reject(result);
  }
};

export const clearStringData = async (key: string): Promise<void> => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    const result: AppError = {
      errorData: e,
      errorMessage: null,
    };
    return Promise.reject(result);
  }
};

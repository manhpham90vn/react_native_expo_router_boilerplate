import Configs from '@constants/configs';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore, Middleware, Store } from '@reduxjs/toolkit';
import { injectStore } from '@src/data/apis/common/client';
import persistedReducer from '@src/redux/rootReducer';
import rootSaga from '@src/redux/rootSaga';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

if (Configs.DEBUG && Configs.LOG_STATE) {
  const logger: Middleware = (store) => (next) => (action) => {
    console.group(action.type);
    console.log(
      '[Dispatching]:',
      action.type,
      'Payload:',
      JSON.stringify(action.payload, null, '\t'),
    );
    console.log(
      '[Current State]:',
      JSON.stringify((store as Store).getState(), null, '\t'),
    );
    const result = next(action);
    console.log(
      '[New State]:',
      JSON.stringify((store as Store).getState(), null, '\t'),
    );
    console.groupEnd();
    return result;
  };
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
  devTools: Configs.DEBUG,
});

injectStore(store);

sagaMiddleware.run(rootSaga);

export const persister = persistStore(store);
export type StorageType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

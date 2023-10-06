import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';
import AppData from '@/types/appData';

export type Theme = 'dark' | 'light' | 'auto';

interface AppState extends AppData<Theme> {}

const initialState: AppState = {
  data: 'auto',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTheme: (state: AppState, action: PayloadAction<Theme>) => {
      state.data = action.payload;
    },
    reset: () => initialState,
  },
});

export const themeSelector = (state: RootState) => state.app.data;
export const appAction = appSlice.actions;
export const appReducer = appSlice.reducer;

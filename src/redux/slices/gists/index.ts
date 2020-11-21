import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GistData } from 'src/types/GistData';

export interface GistsState {
  isLoading: boolean;
  gists: GistData[];
  error?: string;
  totalPages: number;
}

const initialState: GistsState = {
  isLoading: true,
  gists: [],
  totalPages: 1
};

const gistsSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {
    setGists(state, action: PayloadAction<GistData[]>) {
      state.gists = action.payload;
    },
    setGistsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    }
  },
});

export const { setGists, setGistsError, setIsLoading, setTotalPages } = gistsSlice.actions;
export const gistsReducer = gistsSlice.reducer;

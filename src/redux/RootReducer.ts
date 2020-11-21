import { combineReducers } from '@reduxjs/toolkit';
import { gistsReducer } from './slices/gists';

export const rootReducer = combineReducers({
  gists: gistsReducer,
});

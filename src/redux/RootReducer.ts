import { combineReducers } from '@reduxjs/toolkit';
import { gistsReducer } from './slices/gists';
import { organizationsReducer } from './slices/organizations';

export const rootReducer = combineReducers({
  gists: gistsReducer,
  organizations: organizationsReducer,
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrganizationData } from 'src/types/OrganizationData';

export interface OrganizationsState {
  isLoading: boolean;
  organizations: OrganizationData[];
  error: string | null;
  since: number;
}

const initialState: OrganizationsState = {
  isLoading: true,
  organizations: [],
  error: null,
  since: 0
};

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setOrganizations(state, action: PayloadAction<OrganizationData[]>) {
      state.organizations = action.payload;
    },
    setOrganizationsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setSince(state, action: PayloadAction<number>) {
      state.since = action.payload;
    },
  },
});

export const { setOrganizations, setOrganizationsError, setIsLoading, setSince } = organizationsSlice.actions;
export const organizationsReducer = organizationsSlice.reducer;

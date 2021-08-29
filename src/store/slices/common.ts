import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

type CommonState = {
  loading: boolean;
};

const initialState: CommonState = {
  loading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setGlobalLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setGlobalLoader } = commonSlice.actions;

export const loadingStatus = (state: RootState): boolean =>
  state?.common?.loading;

export default commonSlice.reducer;

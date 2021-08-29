import { combineReducers } from '@reduxjs/toolkit';
import commonReducer from './slices/common';

const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;

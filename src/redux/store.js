import { configureStore } from '@reduxjs/toolkit';
import greetingSliceReducer from './greetings/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSliceReducer,
  },
});

export default store;

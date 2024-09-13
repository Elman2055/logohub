import { configureStore } from "@reduxjs/toolkit";
import { logohubApi } from "./logohubApi";

export const store = configureStore({
  reducer: {
    [logohubApi.reducerPath]: logohubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logohubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

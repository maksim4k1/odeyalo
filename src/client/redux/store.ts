import {
  applicationsReducer,
  articlesApi,
  authReducer,
  clientsReducer,
  popupsReducer,
  psychologistsReducer,
  testsReducer,
} from "./features";
import { authApi } from "./features/auth/api";
import {
  type Store,
  type ThunkDispatch,
  type UnknownAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [articlesApi.reducerPath]: articlesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  authReducer,
  applicationsReducer,
  clientsReducer,
  testsReducer,
  popupsReducer,
  psychologistsReducer,
});

export const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([articlesApi.middleware, authApi.middleware]),
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>;

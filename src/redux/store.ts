import applicationsReducer from "./features/applications";
import authReducer from "./features/auth";
import clientsReducer from "./features/clients";
import popupsReducer from "./features/popups";
import psychologistsReducer from "./features/psychologists";
import testsReducer from "./features/tests";
import theoryReducer from "./features/theory";
import {
  type Store,
  type ThunkDispatch,
  type UnknownAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authReducer,
  applicationsReducer,
  clientsReducer,
  testsReducer,
  popupsReducer,
  psychologistsReducer,
  theoryReducer,
});

const store: Store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>;

export default store;

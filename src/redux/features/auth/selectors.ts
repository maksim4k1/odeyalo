import { StatusState } from "./../../../utils/stateCreators";
import { RootState } from "../../store";
import { AuthState, ProfileState } from "./types";
import { AccessRole } from "../../../config/access.config";

const selectAuthModule = (state: RootState): AuthState => {
  return state.authReducer;
};

export const selectAuth = (state: RootState): AuthState => {
  return selectAuthModule(state);
};

export const selectAuthIsAuth = (state: RootState): boolean => {
  return selectAuthModule(state).isAuth;
};

export const selectProfile = (state: RootState): ProfileState => {
  return selectAuthModule(state).profile;
};

export const selectRole = (state: RootState): AccessRole => {
  return selectAuthModule(state).profile.role;
};

export const selectAuthLoginState = (state: RootState): StatusState => {
  return selectAuthModule(state).loginState;
};

export const selectAuthRegisterState = (state: RootState): StatusState => {
  return selectAuthModule(state).registerState;
};

export const selectSendHrSurveyState = (state: RootState): StatusState => {
  return selectAuthModule(state).sendHrSurveyState;
};

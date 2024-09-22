import { type AccessRole } from "../../../config/access.config";
import { type StatusState } from "../../../utils/stateCreators";

export interface ProfileState {
  id: string;
  role: AccessRole;
  email: string;
  username: string;
}

export interface AuthState {
  isAuth: boolean;
  profile: ProfileState;
  loginState: StatusState;
  registerState: StatusState;
  sendHrSurveyState: StatusState;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SendHrSurveyPayload {
  fullName: string;
  company: string;
}

export interface UserData {
  token: string;
  user_id: string;
  role: number;
  email: string;
  username: string;
}

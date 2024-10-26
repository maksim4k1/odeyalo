import { type AppDispatch } from "./../redux/store";
import { authActions } from "@/client/redux/features/auth/";
import {
  type LoginPayload,
  type RegistrationPayload,
  type SendHrSurveyPayload,
} from "@/client/redux/features/auth/types";
import { deleteToken, getToken } from "@/client/storage/token";
import { instanceofHttpError } from "@/client/utils/apiUtils";
import { customAxios } from "@/shared/config/api.config";

export default class AuthService {
  static login = (formData: LoginPayload) => async (dispatch: AppDispatch) => {
    dispatch(authActions.loginLoading());
    try {
      const response = await customAxios.post("/users/auth", formData);

      const data = response.data;

      dispatch(authActions.loginSuccess(data));
    } catch (err) {
      if (instanceofHttpError(err)) {
        dispatch(authActions.loginFailure(err));
      }
    }
  };

  static registration =
    (formData: RegistrationPayload) => async (dispatch: AppDispatch) => {
      dispatch(authActions.registrationLoading());

      try {
        const response = await customAxios.post("/users/reg", {
          email: formData.email,
          username: formData.name,
          password: formData.password,
          confirm_password: formData.confirmPassword,
        });

        const data = response.data;

        dispatch(authActions.registrationSuccess(data));
      } catch (err) {
        if (instanceofHttpError(err)) {
          dispatch(authActions.registrationFailure(err));
        }
      }
    };

  static loginByToken = () => async (dispatch: AppDispatch) => {
    const token = getToken();
    if (token) {
      dispatch(authActions.loginLoading());
      try {
        const response = await customAxios.post("/users/auth_token", {
          token: token,
        });

        const data = response.data;

        dispatch(authActions.loginSuccess(data));
      } catch (err) {
        if (instanceofHttpError(err)) {
          deleteToken();
          dispatch(authActions.loginFailure(err));
        }
      }
    }
  };

  static logout = () => (dispatch: AppDispatch) => {
    deleteToken();
    dispatch(authActions.logout());
  };

  static sendHrSurvey =
    (formData: SendHrSurveyPayload) => async (dispatch: AppDispatch) => {
      dispatch(authActions.sendHrSurveyLoading());

      try {
        const response = await customAxios.post("/manager/send_manager", {
          username: formData.fullName,
          description: "",
          city: "",
          company: formData.company,
          online: false,
          gender: "1",
          birth_date: "2000-01-01",
        });

        const data = response.data;

        dispatch(authActions.sendHrSurveySuccess(data));
      } catch (err) {
        if (instanceofHttpError(err)) {
          dispatch(authActions.sendHrSurveyFailure(err));
        }
      }
    };
}

import { AnyAction } from "redux";
import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user: any) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = (): AnyAction => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const checkUserSession = (): AnyAction => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const emailSignInStart = (emailAndPassword: any): AnyAction => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user: any): AnyAction => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage: string): AnyAction => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: errorMessage,
});

export const signUpStart = (
  emailAndPasswordWithDisplayName: any
): AnyAction => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: emailAndPasswordWithDisplayName,
});

export const signUpSuccess = (user: any): AnyAction => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (errorMessage: string): AnyAction => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
});
export const signOutStart = (): AnyAction => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = (): AnyAction => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (errorMessage: string): AnyAction => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

import { AnyAction } from "redux";
import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  registeredUser:null,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
     case UserActionTypes.SIGN_UP_SUCCESS:
       return{...state,
        registeredUser:action.payload,
        error:null,
      } 
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

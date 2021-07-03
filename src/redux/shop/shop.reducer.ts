import { AnyAction } from "redux";
import { IShopState } from "../../types/state/IShopState";
import ShopActionTypes from "./shop.types";

const INITIAL_DATA: IShopState = {
  collections: {},
  isLoading: false,
  errorMessage: "",
};

export const shopReducer = (state = INITIAL_DATA, action: AnyAction) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

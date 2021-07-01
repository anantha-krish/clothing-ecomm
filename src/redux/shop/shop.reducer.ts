import { AnyAction } from "redux";
import { IShopState } from "../../types/state/IShopState";
import ShopActionTypes from "./shop.types";

const INITIAL_DATA: IShopState = { collections: {} };

export const shopReducer = (state = INITIAL_DATA, action: AnyAction) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

import { AnyAction } from "redux";
import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";

const INITIAL_DATA = SHOP_DATA;

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

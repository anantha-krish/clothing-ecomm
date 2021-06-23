import { AnyAction } from "redux";
import SHOP_DATA from "./shop.data";

const INITIAL_DATA = SHOP_DATA;

export const shopReducer = (state = INITIAL_DATA, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

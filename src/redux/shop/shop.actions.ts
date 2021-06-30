import { AnyAction } from "redux";
import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap: any):AnyAction => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

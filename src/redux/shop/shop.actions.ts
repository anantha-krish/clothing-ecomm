import { AnyAction } from "redux";
import ShopActionTypes from "./shop.types";



export const fetchCollections = (): AnyAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS,
});

export const fetchCollectionsStart = (): AnyAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsFail = (errorMsg:string): AnyAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload:errorMsg
});

export const fetchCollectionsSuccess = (collections:any): AnyAction => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collections
});
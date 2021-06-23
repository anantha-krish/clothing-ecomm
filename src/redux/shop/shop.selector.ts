import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectShop = (state: RootState) => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export type ISelectShopCollection = ReturnType<typeof selectShop>
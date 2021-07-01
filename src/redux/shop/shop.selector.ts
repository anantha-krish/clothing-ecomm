import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectShop = (state: RootState) => state.shop;
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[`${collectionUrlParam}`] : null
  );

export type ISelectShopCollection = ReturnType<typeof selectShop>;
export type ISelectCollection = ReturnType<typeof selectCollection>;

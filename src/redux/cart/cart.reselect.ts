import { access } from "fs";
import { createSelector } from "reselect";
import { RootState } from "../store";
//Memoization
const selectCart = (state: RootState) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);

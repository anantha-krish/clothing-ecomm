import { IItem } from "../../types/IItem";
import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (item: IItem) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});
export const removeItem = (item: IItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
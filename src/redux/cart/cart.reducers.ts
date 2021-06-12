import { AnyAction } from "redux";
import { ICartState } from "../../types/state/ICartState";
import { addCartItem, removeItem } from "../../util/CartUtil";
import { CartActionTypes } from "./cart.types";

const INITIAL_STATE: ICartState = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItem(state.cartItems, action.payload),
        };
    default:
      return state;
  }
};

import { AnyAction } from "redux";
import { ICartState } from "../../types/state/ICartState";
import { addCartItem } from "../../util/CartUtil";
import { CartActionTypes } from "./cart.types";

const INITIAL_STATE:ICartState = {
  hidden: true,
  cartItems:[],
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      case CartActionTypes.ADD_ITEM:
        return{
          ...state,
          cartItems:addCartItem(state.cartItems,action.payload)
        }
    default:
      return state;
  }
};

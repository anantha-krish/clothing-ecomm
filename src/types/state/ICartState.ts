import { IItem } from "../IItem";

export interface ICartState {
  hidden: boolean;
  cartItems: Array<IItem>;
}

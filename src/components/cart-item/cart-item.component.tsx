import React from "react";
import { IItem } from "../../types/IItem";
import "./styles.scss";
interface Props {
  item: IItem;
}

const CartItem = ({ item: { name, price, quantity, imageUrl } }: Props) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x Rs. {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

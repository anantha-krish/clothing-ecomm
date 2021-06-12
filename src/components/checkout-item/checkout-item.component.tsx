import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";
import { AppDispatch } from "../../redux/store";
import { IItem } from "../../types/IItem";
import "./styles.scss";

interface Props extends IReduxProps {
  cartItem: IItem;
}

const CheckoutItem = ({ cartItem,clearItem,removeItem,addItem }: Props) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
          <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
          <div className="value">{quantity}</div>
          <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div></span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  clearItem: (item: IItem) => dispatch(clearItem(item)),
  removeItem: (item: IItem) => dispatch(removeItem(item)),
  addItem: (item: IItem) => dispatch(addItem(item)),
});
const connector = connect(null, mapDispatchToProps);
type IReduxProps = ConnectedProps<typeof connector>;
export default connector(CheckoutItem);

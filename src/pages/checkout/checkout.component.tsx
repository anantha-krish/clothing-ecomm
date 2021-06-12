import React from "react";
import { connect, ConnectedProps } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.reselect";
import { RootState } from "../../redux/store";
import "./styles.scss";
interface Props extends PropsFromRedux {}

const CheckoutPage = ({ cartItems, total }: Props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <div className="total">Rs. {total}</div>
    </div>
  );
};
const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotalPrice(state),
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(CheckoutPage);

import React from "react";
import { connect, ConnectedProps } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.reselect";
import { RootState } from "../../redux/store";
import { IItem } from "../../types/IItem";
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
      {cartItems.map((item: IItem) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">Rs. {total}</div>
      <div className="test-warning">
        * Please use below test payment card details for payments *
        <br />
        4242 4242 4242 4242 Exp: 01/22 CVV:123
      </div>
      <StripeCheckoutButton price={total} />
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

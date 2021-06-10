import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.reselect";
import { RootState } from "../../redux/store";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/customButton.component";
import "./styles.scss";
interface Props extends PropsFromRedux {}

const CartDropdown = ({ hidden, cartItems }: Props) => {
  return !hidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton type="button" isInvertedColor>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  ) : null;
};
const mapStateToProps = (state: RootState) => ({
  hidden: state.cart.hidden,
  cartItems: selectCartItems(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CartDropdown);

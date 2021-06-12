import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartHidden, selectCartItems } from "../../redux/cart/cart.reselect";
import { RootState } from "../../redux/store";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/customButton.component";
import "./styles.scss";
interface Props extends PropsFromRedux,RouteComponentProps {}

const CartDropdown = ({ hidden, cartItems,history,dispatch }: Props) => {
  return !hidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length?(cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))):<span className="empty-message">Your cart is empty</span>}
      </div>
      <CustomButton type="button" isInvertedColor onClick={()=>{
        dispatch(toggleCartHidden());
        history.push("/checkout")}}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  ) : null;
};
const mapStateToProps = (state: RootState) => ({
  hidden: selectCartHidden(state),
  cartItems: selectCartItems(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(CartDropdown));

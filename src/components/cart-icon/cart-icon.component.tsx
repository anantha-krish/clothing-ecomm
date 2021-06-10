import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.reselect";
import { AppDispatch, RootState } from "../../redux/store";
import "./styles.scss";

const mapDispatchToProps=(dispatch:AppDispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps=(state:RootState)=>({
  itemCount:selectCartItemsCount(state)
})


const CartIcon = ({ itemCount = 0,toggleCartHidden }: PropsFromRedux) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const connector = connect(mapStateToProps,mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(CartIcon);

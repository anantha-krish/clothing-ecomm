import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { AppDispatch } from "../../redux/store";
import "./styles.scss";

const mapDispatchToProps=(dispatch:AppDispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

interface Props {
  itemCount?: number;
  toggleCartHidden:()=>void;

}
const CartIcon = ({ itemCount = 0,toggleCartHidden }: Props) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};


export default connect(null,mapDispatchToProps)(CartIcon);

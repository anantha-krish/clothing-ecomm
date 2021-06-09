import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import CustomButton from "../custom-button/customButton.component";
import "./styles.scss";
interface Props {
  hideCart?: boolean;
}

const CartDropdown = ({ hideCart }: Props) => {
  return !hideCart ? (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton type="button" isInvertedColor>GO TO CHECKOUT</CustomButton>
    </div>
  ) : null;
};
const mapStateToProps = (state: RootState) => ({
  hideCart: state.cart.hidden,
});

export default connect(mapStateToProps)(CartDropdown);

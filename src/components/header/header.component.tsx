import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { AppDispatch, RootState } from "../../redux/store";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, signOut }: ReduxProps) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo/>
    </LogoContainer>
    <OptionContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" to="" onClick={signOut}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    <CartDropdown />
  </HeaderContainer>
);

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signOut: () => dispatch(signOutStart()),
});
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(Header);

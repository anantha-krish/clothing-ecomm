import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Contact from "./pages/contact/contact";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component";
import { AppDispatch, RootState } from "./redux/store";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.reselect";

class App extends React.Component<ReduxProps> {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Homepage /> : <SignInAndSignUp />)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector<
  RootState,
  { currentUser: any }
>({
  currentUser: selectCurrentUser,
});
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(App);

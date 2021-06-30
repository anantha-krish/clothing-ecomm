import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import CheckoutPage from "./pages/checkout/checkout.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component";
import { AppDispatch, RootState } from "./redux/store";
import { setCurrentUser } from "./redux/user/user.actions";

interface Props {
  setCurrentUser: (user: any) => void;
  currentUser: any;
}
class App extends React.Component<Props> {
  unsubscribe:any;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);
        useRef?.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
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
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state: RootState) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

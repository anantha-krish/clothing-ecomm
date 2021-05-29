import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component";
interface State {
  currentUser: any;
}
interface Props {}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribe: any;
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);
        useRef?.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      }
      else{
        this.setState({currentUser: userAuth})
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
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

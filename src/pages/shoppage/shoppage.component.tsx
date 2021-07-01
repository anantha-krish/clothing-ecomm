import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  convertCollectionsSnapShotToMap,
  firestore
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { AppDispatch } from "../../redux/store";
import CollectionPage from "../collection-page/collection-page.component";
interface Props extends ReduxProps, RouteComponentProps {}
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component<Props> {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot: any;
 
 
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapShotToMap(snapshot);
      console.log({collectionMap})
      this.props.updateCollections(collectionMap);

      this.setState({ loading: false });
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateCollections: (collectionsMap: any) =>
    dispatch(updateCollections(collectionsMap)),
});
const connector = connect(null,mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ShopPage);

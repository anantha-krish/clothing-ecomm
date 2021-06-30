import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  convertCollectionsSnapShotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { AppDispatch } from "../../redux/store";
import CollectionPage from "../collection-page/collection-page.component";
interface Props extends ReduxProps, RouteComponentProps {}
class ShopPage extends React.Component<Props> {
  unsubscribeFromSnapshot: any;
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertCollectionsSnapShotToMap(snapshot);
        this.props.updateCollections(collectionMap);
      }
    );
    this.unsubscribeFromSnapshot();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop">
        <Route exact path={match.path} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap))
});
const connector = connect(mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ShopPage);

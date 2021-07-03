import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  fetchCollections,
} from "../../redux/shop/shop.actions";
import { selectShopCollectionsLoading } from "../../redux/shop/shop.selector";
import { AppDispatch, RootState } from "../../redux/store";
import CollectionPage from "../collection-page/collection-page.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

interface Props extends ReduxProps, RouteComponentProps {}
class ShopPage extends React.Component<Props> {
  unsubscribeFromSnapshot: any;

  componentDidMount() {
    this.props.fetchCollections();
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
              isLoading={this.props.isLoading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.props.isLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});
const mapStateToProps = createStructuredSelector<
  RootState,
  { isLoading: boolean }
>({
  isLoading: selectShopCollectionsLoading,
});
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ShopPage);

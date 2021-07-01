import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import { RootState } from "../../redux/store";
import { IItem } from "../../types/IItem";
import "./styles.scss";

interface MatchParams {
  collectionId: string;
}
interface IProps extends RouteComponentProps<MatchParams> {}

const CollectionPage = ({
  match,
  collection,
}: RouteComponentProps<MatchParams> & IReduxProps) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items?.map((item: IItem) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState, ownProps: IProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const connector = connect(mapStateToProps);
type IReduxProps = ConnectedProps<typeof connector>;

export default connector(CollectionPage);

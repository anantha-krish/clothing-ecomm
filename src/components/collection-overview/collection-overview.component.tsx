import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  ISelectShopCollection,
  selectShopCollections,
} from "../../redux/shop/shop.selector";
import { RootState } from "../../redux/store";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./styles.scss";

const CollectionOverview = ({ collections }: Props) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector<
  RootState,
  ISelectShopCollection
>({
  collections: selectShopCollections,
});

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;
export default connector(CollectionOverview);

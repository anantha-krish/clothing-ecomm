import React from "react";
import { IItem } from "../../types/IItem";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
interface Props {
  title: string | undefined;
  items: Array<IItem>;
}

const CollectionPreview = ({ title, items }: Props) => {
  return (
    <div className="collection-preview">
      <div className="title">{title?.toUpperCase()}</div>
      <div className="preview">
        {items
          ?.filter((item, index) => index < 4)
          .map((item: IItem) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

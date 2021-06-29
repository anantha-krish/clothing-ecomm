import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { AppDispatch } from "../../redux/store";
import { IItem } from "../../types/IItem";
import CustomButton from "../custom-button/customButton.component";
import "./collection-item.styles.scss";
interface Props {
  item: IItem;
  addItemToCart:(item:IItem)=>void;
}

const CollectionItem = ({ item,addItemToCart }: Props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <div className="price">{item.price}</div>
      </div>
      <CustomButton className="custom-button" type="button" isInvertedColor onClick={()=>addItemToCart(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    addItemToCart: (item: IItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

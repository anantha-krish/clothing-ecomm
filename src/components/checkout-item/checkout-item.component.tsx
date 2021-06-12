import React from 'react'
import { IItem } from '../../types/IItem'
import "./styles.scss";

interface Props {
    cartItem:IItem;
}

const CheckoutItem = ({cartItem:{name,price,imageUrl,quantity}}:Props) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove">&#10005;</span>
        </div>
    )
}

export default CheckoutItem

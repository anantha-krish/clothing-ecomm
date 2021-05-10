import React from 'react'
import "./collection-item.styles.scss"
interface Props {
 name:string;
 price:string;
 imageUrl:string;   
}

const CollectionItem = ({name,price,imageUrl}: Props) => {
    return (
        <div className="collection-item">
            <div className="image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <div className="price">{price}</div>
            </div>
        </div>
    )
}

export default CollectionItem

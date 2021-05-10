import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';
import  "./collection-preview.styles.scss";
interface Props {
    title:string;
    items:Array<any>
}

const CollectionPreview = ({title,items}: Props) => {
    return (
        <div className="collection-preview">
            <div className="title">
               {title.toUpperCase()}
            </div>
            <div className="preview">
               {items
               .filter((item,index)=>index<4)
               .map(({id,...otherProps})=>(
                   <CollectionItem key={id} {...otherProps}/>
               ))}
            </div>
            
        </div>
    )
}

export default CollectionPreview

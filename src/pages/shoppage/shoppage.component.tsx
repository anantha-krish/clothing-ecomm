import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shoppage.data';

interface Props {
    
}

interface State {
    collections:Array<any>
}

export default class ShopPage extends Component<Props, State> {
   constructor(props:Props){
       super(props);

       this.state = {
           collections:SHOP_DATA
       }
   }

    render() {
        return (
            <div>
                {this.state.collections.map(({id,...otherProps})=><CollectionPreview key={id} {...otherProps}/>)}
            </div>
        )
    }
}

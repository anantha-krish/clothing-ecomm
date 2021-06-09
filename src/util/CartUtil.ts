import { IItem } from "../types/IItem";

export const addCartItem =(cartItems:Array<IItem>,itemToBeAdded:IItem)=>{
    const existingItem = cartItems.find((cartItem)=> cartItem.id === itemToBeAdded.id);
    if(existingItem)
    return cartItems.map((cartItem)=>(
        cartItem.id===existingItem.id ? {...cartItem,quantity:cartItem.quantity+1}:cartItem ));
    else
    
    return [...cartItems,{...itemToBeAdded,quantity:1}]
}
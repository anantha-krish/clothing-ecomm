import { IItem } from "../types/IItem";

export const addCartItem =(cartItems:Array<IItem>,itemToBeAdded:IItem)=>{
    const existingItem = cartItems.find((cartItem)=> cartItem.id === itemToBeAdded.id);
    if(existingItem)
    return cartItems.map((cartItem)=>(
        cartItem.id===existingItem.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem));
    return [...cartItems,{...itemToBeAdded,quantity:1}]
}

export const removeItem = (cartItems:IItem[],cartItemToBeRemoved:IItem)=>
{
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToBeRemoved.id)
    if(existingItem?.quantity===1)
    {
        return cartItems.filter( cartItems => cartItems.id !== cartItemToBeRemoved.id)
    }
    return cartItems.map((cartItem)=>(
        cartItem.id===existingItem?.id ? {...cartItem,quantity:cartItem.quantity-1}:cartItem ));
}
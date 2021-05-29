import React, { ReactNode } from 'react'
import "./styles.scss";
interface Props {
children:ReactNode;  
type:"submit"|"button"; 
onClick? :()=>{};
isGoogleSignIn?:boolean;
}

const CustomButton = ({children,isGoogleSignIn,...otherProps}: Props) => {
    return (
        <button className={`${isGoogleSignIn? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton

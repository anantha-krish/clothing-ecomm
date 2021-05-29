import React, { ReactNode } from 'react'
import "./styles.scss";
interface Props {
children:ReactNode;  
type:"submit"|"button"; 
onClick? :()=>{}
}

const CustomButton = ({children,...otherProps}: Props) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton

import React, { ReactNode } from "react";
import { CustomButtonContainer } from "./customButton.styles";
export interface CustomButtonProps {
  children: ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
  isGoogleSignIn?: boolean;
  isInvertedColor?: boolean;
  className?: string;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;

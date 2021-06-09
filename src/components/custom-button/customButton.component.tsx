import React, { ReactNode } from "react";
import "./styles.scss";
interface Props {
  children: ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
  isGoogleSignIn?: boolean;
  isInvertedColor?: boolean;
}

const CustomButton = ({
  children,
  isInvertedColor,
  isGoogleSignIn,
  ...otherProps
}: Props) => {
  return (
    <button
      className={`${isInvertedColor ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

interface Props {
  isLoading: boolean;
}

const WithSpinner = (WrappedComponent: any) => {
  const Spinner = ({ isLoading, ...otherProps }: Props) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;

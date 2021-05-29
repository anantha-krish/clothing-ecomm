import React from "react";
import "./styles.scss";

interface Props {
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  name:string;
  type:"email"|"password"; 
  required:boolean;
}

const FormInput = ({ onChange, label, ...otherProps }: Props) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

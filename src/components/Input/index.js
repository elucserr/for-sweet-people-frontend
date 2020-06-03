import React from "react";
import "./Input.css";

const STYLES = ["input--white--solid", "input--white--outline"];

const SIZES = ["input--medium", "input--small", "input--big"];

export const Input = ({ children, type, inputStyle, inputSize }) => {
  const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

  const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[0];

  return (
    <div className={`input ${checkInputStyle} ${checkInputSize}`} type={type}>
      {children}
    </div>
  );
};

export default Input;

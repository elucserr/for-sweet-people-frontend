import React from "react";
import "./Button.css";

const STYLES = [
  "btn--orange--solid",
  "btn--white--solid",
  "btn--white--solid--1",
  "btn--white--solid--2",
  "btn--white--solid--3",
  "btn--white--solid--4",
  "btn--transparent",
  "btn--green--solid",
];

const SIZES = [
  "btn--medium",
  "btn--small",
  "btn--options",
  "-btn--super--small",
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

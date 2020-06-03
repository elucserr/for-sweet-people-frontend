import React from "react";
import "./Card.css";

const STYLES = [
  "card--red",
  "card--orange",
  "card--green",
  "card--grey",
  "card--white",
];

const SIZES = ["card--medium", "card--small"];

export const Card = ({ children, cardStyle, cardSize }) => {
  const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];

  const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

  return (
    <div className={`card ${checkCardStyle} ${checkCardSize}`}>
      <p className="text">{children}</p>
    </div>
  );
};

export default Card;

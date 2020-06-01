import React from "react";
import "./Square.css";
import Button from "../../components/Button";

const STYLES = ["square--white"];

const SIZES = ["square--medium"];

export const SquareActivity = ({
  children,
  squareStyle,
  squareSize,
  item,
  handleDelete,
}) => {
  const checkSquareStyle = STYLES.includes(squareStyle)
    ? squareStyle
    : STYLES[0];

  const checkSquareSize = SIZES.includes(squareSize) ? squareSize : SIZES[0];

  return (
    <div className={`square ${checkSquareStyle} ${checkSquareSize}`}>
      <ul className="ul-list">
        <li className="list">{item.time}</li>
        <li className="list">{item.type}</li>
        <li className="list">{item.km}</li>
      </ul>

      <Button
        buttonStyle="btn--transparent"
        onClick={(e) => {
          handleDelete(item._id);
        }}
      >
        x
      </Button>
    </div>
  );
};

export default SquareActivity;

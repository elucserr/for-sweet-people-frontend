import React from "react";
import "./Square.css";
import Button from "../../components/Button";

const STYLES = ["square--white-b"];

const SIZES = ["square--medium-b"];

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
      <ul className="ul-list-blood">
        <li className="list-1">{item.type}</li>
        <li className="list-2">{item.time}</li>
        <li className="list-3">{item.km}</li>
      </ul>

      <Button
        buttonStyle="btn--transparent"
        buttonSize="btn--delete"
        onClick={(e) => {
          handleDelete(item._id);
        }}
      >
        x
      </Button>
    </div>
  );
};

export default SquareActivity ;

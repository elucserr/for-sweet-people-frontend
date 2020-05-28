import React from 'react';
import './Square.css'

const STYLES = [
    "square--white",
]

const SIZES = [
    "square--medium",

]

export const Card = ({ children, squareStyle, squareSize}) => {

    const checkSquareStyle = STYLES.includes(squareStyle) 
    ? squareStyle 
    : STYLES[0];

    const checkSquareSize = SIZES.includes(squareSize)
    ? squareSize
    : SIZES[0];

    return (
         <div className={`card ${checkSquareStyle} ${checkSquareSize}`}>
            <p className="text">{children}</p>
            <p className="text">{children}</p>
            <p className="text">{children}</p>
         </div>
    
        
        
    )
}

export default Card;

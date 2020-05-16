import React from 'react';
import './Card.css'

const STYLES = [
    "card--primary--solid",
    "card--red--solid",
    "card--orange--solid",
    "card--grey--solid",
    "card--green--solid",
]

const SIZES = [
    "card--medium",
    "card--small",
    "card--big",

]

export const Card = ({ children, type, cardStyle, cardSize}) => {

    const checkCardStyle = STYLES.includes(cardStyle) 
    ? cardStyle 
    : STYLES[0];

    const checkCardSize = SIZES.includes(cardSize)
    ? cardSize
    : SIZES[0];

    return (
        <div className={`btn ${checkCardStyle} ${checkCardSize}`} 
         type={type}
        >
            {children}
        </div>
    )
}
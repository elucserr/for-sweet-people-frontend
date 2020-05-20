import React from 'react';
import './InputScroll.css'

const STYLES = [
    "scroll--white--solid",
]

const SIZES = [
    "scroll--big",

]

export const Scroll = ({ children, type, scrollStyle, scrollSize}) => {

    const checkScrollStyle = STYLES.includes(scrollStyle) 
    ? scrollStyle 
    : STYLES[0];

    const checkScrollSize = SIZES.includes(scrollSize)
    ? scrollSize
    : SIZES[0];

    return (
        <div className={`input ${checkScrollStyle} ${checkScrollSize}`} 
         type={type}
        >
            {children}
        </div>
    )
}
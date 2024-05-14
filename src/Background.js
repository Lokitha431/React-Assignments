import React from "react";

const Background = ({displayColor,color}) => {

    const handleChange = (e) => {
        const {value} = e.target;
        displayColor(value);
    };
    return(
        <input type = "text" placeholder=" Enter your favourite color " id = "input" aria-label="input" onChange={handleChange} value={color} />
    );
};
export default Background;
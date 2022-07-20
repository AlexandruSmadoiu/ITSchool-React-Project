import React from "react";
import "./Button.css";

/* array with available styles */

const styleButton = [
    "button--primary--solid",
    "button--secondary--solid",
    "button--success--solid",
    "button--info--solid",
    "button--warning--solid",
    "button--danger--solid",
    "button--primary--outline",
    "button--secondary--outline",
    "button--success--outline",
    "button--info--outline",
    "button--warning--outline",
    "button--danger--outline" 
];

/* array with available styles */

/* array with available sizes */

const sizes = ["button--small", "button--medium", "button--large"];

/* array with available sizes */

export const Button = ({
    children,
    type,
    onClick,
    buttonStyleSolid,
    buttonSize
}) => {

    const testButtonStyle = styleButton.includes(buttonStyleSolid) ? buttonStyleSolid : styleButton[0];

    const testButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    return(
    <button className={`btn ${testButtonSize} ${testButtonStyle}`} 
    onClick={onClick} 
    type={type}>
        {children}
    </button>
)
 
}
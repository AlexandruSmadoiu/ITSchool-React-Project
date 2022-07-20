import React from "react";
import "./Button.css";

const styleSolid = [
    "button--primary--solid",
    "button--secondary--solid",
    "button--success--solid",
    "button--info--solid",
    "button--warning--solid",
    "button--danger--solid"
];

const sizes = ["button--small", "button--medium",  "button--large"];


export const Button = ({
    text,
    type,
    onClick,
    buttonStyleSolid,
    buttonSize
}) => {

    const testButtonStyle = styleSolid.includes(buttonStyleSolid) ? buttonStyleSolid : styleSolid[0];

    const testButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[1];

    return(
    <Button className={`${testButtonStyle} ${testButtonSize}`} 
    onClick={onClick} 
    type={type}>
        {text}
    </Button>

)
 
}
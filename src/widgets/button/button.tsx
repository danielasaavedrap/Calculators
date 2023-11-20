import React from "react";
import './button-style.css';

type buttonProps = {
    text: string;
    section: string;
    disabled?: boolean;
    size?: "large" | "medium" | "small" ;
    width?: number | string;
    onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: buttonProps) => {
    return <button style={{width: props.width}} disabled={props.disabled || false} className={`btn btn-${props.section} ${props.size}` } onClick={props.onclick}>{props.text}</button>
}
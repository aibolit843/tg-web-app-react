import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}>
            {props.text}
        </button>
    );
};

export default Button;

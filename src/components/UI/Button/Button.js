import React        from 'react';
import classes      from './Button.css';

const button = (props) => (
    <button 
        className={props.classes}
        btnType={props.btnType}
        onClick={props.clicked}
        disabled= {props.disabled}
    >
       {props.children}
    </button>
);

export default button;
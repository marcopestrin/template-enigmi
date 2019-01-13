import React        from 'react';

const button = (props) => (
    <button 
        btnType={props.btnType}
        onClick={props.clicked}
        disabled= {props.disabled}
    >
       {props.children}
    </button>
);

export default button;
import React, { Fragment } from 'react';

const Button = (props) => {
    return <button className={props.className}>{props.children}</button>
};

export default Button;
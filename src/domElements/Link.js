import React, { Fragment } from 'react';

const Link = (props) => {
    return <a href='#' className={props.className}>{props.children}</a>
};

export default Link;
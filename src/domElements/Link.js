import React from 'react';
import styles from './Link.module.css'

const Link = (props) => {
    return <a href='#' className={styles.link}>{props.children}</a>
};

export default Link;
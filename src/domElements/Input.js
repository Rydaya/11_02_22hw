import React from 'react';
import styles from './lnput.module.css';

const Input = (props) => {
    return <input type={props.type} className={styles.input}/>
};

export default Input;
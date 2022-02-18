import React from 'react';
import Link from '../domElements/Link';
import Button from '../domElements/Button';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.block}>
                <Link className={styles.link} children='Почта' />
                <Link className={styles.link} children='Картинки' />
                <Button className={styles.btn} children='' />
                <Button className={styles.btn} children='' />
            </div>
        </header>
    )
};

export default Header;
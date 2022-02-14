import React, { Fragment } from 'react';
import Link from '../domElements/Link';
import Button from '../domElements/Button';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.header__block}>
                <Link className={styles.header__link} children='Почта' />
                <Link className={styles.header__link} children='Картинки' />
                <Button className={styles.header__btn} children='' />
                <Button className={styles.header__btn} children='' />
            </div>
        </header>
    )
};

export default Header;
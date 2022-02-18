import React from 'react';
import Link from '../domElements/Link';
import Button from '../domElements/Button';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.block}>
                <Link children='Почта' />
                <Link children='Картинки' />
                <Button children='' />
                <Button children='' />
            </div>
        </header>
    )
};

export default Header;
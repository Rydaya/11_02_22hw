import React from 'react';
import Link from '../domElements/Link';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.text}>Украина</div>
            <div className={styles.block}>
                <div className={styles.links}>
                    <Link children='Все о Google' />
                    <Link children='Реклама' />
                    <Link children='Для бизнеса' />
                    <Link children='Как работает Google Поиск' />
                </div>
                <div className={styles.links}>
                    <Link children='Конфиденциальность' />
                    <Link children='Условия' />
                    <Link children='Настройки' />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
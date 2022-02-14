import React, { Fragment } from 'react';
import Link from '../domElements/Link';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer__text}>Украина</div>
            <div className={styles.footer__block}>
                <div className={styles.footer__links}>
                    <Link children='Все о Google' />
                    <Link children='Реклама' />
                    <Link children='Для бизнеса' />
                    <Link children='Как работает Google Поиск' />
                </div>
                <div className={styles.footer__links}>
                    <Link children='Конфиденциальность' />
                    <Link children='Условия' />
                    <Link children='Настройки' />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
import React from 'react';
import Link from '../domElements/Link';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.text}>Украина</div>
            <div className={styles.block}>
                <div>
                    <Link children='Все о Google' />
                    <Link children='Реклама' />
                    <Link children='Для бизнеса' />
                    <Link children='Как работает Google Поиск' />
                </div>
                <div>
                    <Link children='Конфиденциальность' />
                    <Link children='Условия' />
                    <Link children='Настройки' />
                </div>
            </div>
        </footer>
    )
};

export default Footer;
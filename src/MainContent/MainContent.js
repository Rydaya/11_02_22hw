import React, { Fragment } from 'react';
import googleImg from '../images/googleImg.png';
import Link from '../domElements/Link';
import Button from '../domElements/Button';
import Input from '../domElements/Input';
import styles from './MainContent.module.css'

const MainContent = () => {
    return (
        <main>
            <div className={styles.main__img}>
                <img src={googleImg} alt='' />
            </div>
            <Input type='text' className={styles.main__input} />
            <div className={styles.main__btn}>
                <Button children='Поиск в Google' />
                <Button children='Мне повезёт!' />
            </div>
            <p className={styles.main__text}>Сервисы Google доступны на этих языках: <Link className={styles.main__link} children='українська' /></p>
        </main>
    )
}

export default MainContent;
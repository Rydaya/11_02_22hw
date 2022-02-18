import React from 'react';
import googleImg from '../images/googleImg.png';
import Link from '../domElements/Link';
import Button from '../domElements/Button';
import Input from '../domElements/Input';
import styles from './MainContent.module.css'

const MainContent = () => {
    return (
        <main>
            <div className={styles.img}>
                <img src={googleImg} alt='' />
            </div>
            <Input type='text' className={styles.input} />
            <div className={styles.btn}>
                <Button children='Поиск в Google' />
                <Button children='Мне повезёт!' />
            </div>
            <p className={styles.text}>Сервисы Google доступны на этих языках: <Link className={styles.link} children='українська' /></p>
        </main>
    )
}

export default MainContent;
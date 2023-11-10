import React from 'react';
import styles from './DonatePopupContent.module.css';

const DonatePopupContent = () => {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Пожертвовать</h2>
            <div className={styles.container}>
                <h2 className={styles.type}>сумма</h2>
                <input type="number" className={styles.input} placeholder="сумма"/>
            </div>
            <div className={styles.container}>
                <h2 className={styles.type}>email</h2>
                <input type="text" className={styles.input} placeholder="укажите почту для отправки чека"/>
            </div>
            <div className={styles.container}>
                <h2 className={styles.type}>способ оплаты</h2>
                <label><input name="origin" type="radio" checked /> банковская карта</label>
            </div>
            <p className={styles.description}>Нажимая кнопку «пожертвовать» вы соглашаетесь с условиями <span className={styles.span}>оферты</span>, <span className={styles.span}>политики</span> в отношении обработки и защиты персональных данных и даёте <span className={styles.span}>согласие</span> на их обработку</p>
            <button className={styles.button}>перейти к оплате</button>
        </div>
    );
};

export default DonatePopupContent;

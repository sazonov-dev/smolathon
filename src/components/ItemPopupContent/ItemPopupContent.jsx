import React from 'react';
import styles from "./ItemPopupContent.module.css";
import st from '../ItemPopup/ItemPopup.module.css';
import testImg from '../../images/img-01.jpeg';

const ItemPopupContent = ({closeModal}) => {
    return (
        <div className={styles.content}>
        <img className={styles.img} src={testImg} alt=''/>
        <div className={styles.itemPopupContent}>
            <h2 className={styles.title}>Смоленская крепость</h2>
            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
        </div>
        <div className={styles.itemPopupTable}>
            <div className={styles.itemPopupTableLine}>
                <div className="containerInfo">
                    <p className={styles.type}>Экскурсия</p>
                    <p className={styles.type}> +7 (929) 323-12-33</p>
                </div>
                <div className={styles.info}>
                    <div className="infoContent">
                        <p className={styles.type}><span>Дата:</span> 13.02.2024</p>
                        <p className={styles.type}><span>Время:</span> 14:40</p>
                    </div>
                    <button className={styles.location}></button>
                </div>
            </div>
            <div className={styles.itemPopupTableLine}>
                <div className="containerInfo">
                    <p className={styles.type}>Экскурсия</p>
                    <p className={styles.type}> +7 (929) 323-12-33</p>
                </div>
                <div className={styles.info}>
                    <div className="infoContent">
                        <p className={styles.type}><span>Дата:</span> 13.02.2024</p>
                        <p className={styles.type}><span>Время:</span> 14:40</p>
                    </div>
                    <button className={styles.location}></button>
                </div>
            </div>
            <div className={styles.itemPopupTableLine}>
                <div className="containerInfo">
                    <p className={styles.type}>Экскурсия</p>
                    <p className={styles.type}> +7 (929) 323-12-33</p>
                </div>
                <div className={styles.info}>
                    <div className="infoContent">
                        <p className={styles.type}><span>Дата:</span> 13.02.2024</p>
                        <p className={styles.type}><span>Время:</span> 14:40</p>
                    </div>
                    <button className={styles.location}></button>
                </div>
            </div>
        </div>
        <p className={styles.socialRetweet}>поделитесь событием в соцсетях:</p>
        <div className={styles.socialContainer}>
            <button className={styles.vk}></button>
            <button className={styles.copy}>скопировать ссылку</button>
        </div>
    </div>
    );
};

export default ItemPopupContent;

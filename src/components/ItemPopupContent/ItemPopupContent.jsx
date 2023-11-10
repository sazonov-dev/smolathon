import React from 'react';
import styles from "./ItemPopupContent.module.css";
import st from '../ItemPopup/ItemPopup.module.css';
import testImg from '../../images/img-01.jpeg';

const ItemPopupContent = ({item}) => {
    return (
        <div className={styles.content}>
        <img className={styles.img} src={item.image_name} alt={item.title}/>
        <div className={styles.itemPopupContent}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
        </div>
        <div className={styles.itemPopupTable}>
            {item.events.map((element) => (
                <div className={styles.itemPopupTableLine} key={item.id}>
                    <div className="containerInfo">
                        <p className={styles.type}>Экскурсия</p>
                        <p className={styles.type}>{item.phone_number}</p>
                    </div>
                    <div className={styles.info}>
                        <div className="infoContent">
                            <p className={styles.type}><span>Дата:</span> {element.date}</p>
                            <p className={styles.type}><span>Время:</span> {element.time}</p>
                        </div>
                        <button className={styles.location}></button>
                    </div>
                </div>
            ))}
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

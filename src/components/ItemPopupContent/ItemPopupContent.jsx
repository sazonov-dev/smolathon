import React from 'react';
import styles from "./ItemPopupContent.module.css";
import st from '../ItemPopup/ItemPopup.module.css';
import testImg from '../../images/img-01.jpeg';

const ItemPopupContent = ({item}) => {
    const getYandexPoint = () => {
        const api = '87a051dc-0431-4751-abc7-994133696865';
        const location = item.location.split(',');
        function generateYandexMapsLink(latitude, longitude) {
            const baseUrl = "https://yandex.ru/maps/";
            const queryParameters = `?ll=${longitude},${latitude}&z=15`;
            return baseUrl + queryParameters;
        }

        const latitude = location[0];
        const longitude = location[1].slice(1, location[1].length);
        const yandexMapsLink = generateYandexMapsLink(latitude, longitude);
        const yandexNavigatorLink = `yandexnavi://build_route_on_map?lat_to=${latitude}&lon_to=${longitude}`;
        window.location.href = yandexNavigatorLink;
        console.log(yandexNavigatorLink)
        console.log(yandexMapsLink);
    }

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
                        <button className={styles.location} onClick={getYandexPoint}></button>
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

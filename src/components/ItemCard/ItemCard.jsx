import React from 'react';
import styles from './ItemCard.module.css';
import likeImg from "../../images/like.svg";
import filledImg from '../../images/heart-filled.svg';

const ItemCard = ({item, cardHandler, likeHandler}) => {
    const getLiked = JSON.parse(localStorage.getItem('likedCards')) || false;

    return (
        <article className={styles.gridItem} onClick={(event) => cardHandler(event, item)} id="card" key={item.id} data-id={item.id}>
            <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                {getLiked && getLiked.includes(item.id) ? <img className="likeImg" src={filledImg} alt="Иконка лайка" id="likeImg" data-state="filled"/> : <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>}
            </div>
            <img className={styles.gridItemImg} src={item.image_name} alt={item.title}/>
            <div className={styles.articleContent}>
                <h2 className={styles.articleTitle}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
            </div>
        </article>
    );
};

export default ItemCard;

import React, {useEffect, useState} from 'react';
import styles from './MainContainer.module.css';
import testImg from '../../images/img-01.jpeg';
import likeFilledImg from '../../images/heart-filled.svg';
import likeImg from '../../images/like.svg';
import itemPopup from "../ItemPopup/ItemPopup";
import ItemPopupContent from "../ItemPopupContent/ItemPopupContent";
import ItemPopup from "../ItemPopup/ItemPopup";
import {useDispatch, useSelector} from "react-redux";
import ItemCard from "../ItemCard/ItemCard";

const MainContainer = ({closeModal, isOpen, modalComponent, cardHandler, likeHandler, isFiltered}) => {

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.cardReducer);

    return (
        <div className={styles.mainContainer}>
            <section className={styles.gridSectionContainer}>
                <div className={styles.gridSection}>
                    {isFiltered ? cardData.preparedCards.data.map((item) => (
                        <ItemCard item={item} cardHandler={cardHandler} likeHandler={likeHandler}/>
                    )) : cardData.cards.cards.map((item) => (
                        <ItemCard item={item} cardHandler={cardHandler} likeHandler={likeHandler}/>
                    ))}
                </div>
            </section>
            {isOpen && (
                <ItemPopup closeModal={() => closeModal(null, false)}>
                    {modalComponent}
                </ItemPopup>
            )}
        </div>
    );
};

export default MainContainer;

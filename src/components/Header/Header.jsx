import React from 'react';
import styles from './Header.module.css';
import likeIcon from '../../images/bag.svg';
import DonatePopupContent from "../DonatePopupContent/DonatePopupContent";

const Header = ({openModal, isFiltered, filteredCards, allCards}) => {


    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1 className={styles.logo}>Культурный Смоленск</h1>
                <div className={styles.headerAuth}>
                    {isFiltered ? <div className={styles.wantedContainer} onClick={allCards}>
                        <img className={styles.likeIcon} src={likeIcon} alt="Иконка лайка"/>
                        <button className={styles.wanted}>все места</button>
                    </div> : <div className={styles.wantedContainer} onClick={filteredCards}>
                        <img className={styles.likeIcon} src={likeIcon} alt="Иконка лайка"/>
                        <button className={styles.wanted}>хочу пойти</button>
                    </div>}
                    <button className={styles.donate} onClick={() => openModal(<DonatePopupContent/>, true)}>поддержать</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

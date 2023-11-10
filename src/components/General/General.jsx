import React from 'react';
import styles from './General.module.css';
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import Footer from "../Footer/Footer";

const General = ({openModal, closeModal, setIsOpen, setModalComponent, modalComponent, isOpen}) => {
    return (
        <div className={styles.general}>
            <Header openModal={openModal} closeModal={closeModal}/>
            <MainContainer openModal={openModal} closeModal={closeModal} setIsOpen={setIsOpen} setModalComponent={setModalComponent} modalComponent={modalComponent} isOpen={isOpen}/>
            <Footer/>
        </div>
    );
};

export default General;

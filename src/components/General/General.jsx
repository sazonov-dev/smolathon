import React, {useState} from 'react';
import styles from './General.module.css';
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import Footer from "../Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import likeImg from "../../images/like.svg";
import ItemCard from "../ItemCard/ItemCard";
import ItemPopupContent from "../ItemPopupContent/ItemPopupContent";
import likeFilledImg from "../../images/heart-filled.svg";
import {fetchDataFromServer, filteredData} from "../../services/actions/cardAction";

const General = ({openModal, closeModal, setIsOpen, setModalComponent, modalComponent, isOpen}) => {
    const cardData = useSelector(state => state.cardReducer);
    const dispatch = useDispatch();
    const [preparedCards, setPreparedCards] = useState(null)
    const [isFiltered, setIsFiltered] = useState(false);

    const localStorageHandler = (id, state) => {
        const initState = JSON.parse(localStorage.getItem('likedCards')) || [];
        let newState;

        switch (state) {
            case "ADD":
                newState = [...initState, id];
                break;
            case "REMOVE":
                newState = initState.filter((item) => item !== id);
                break;
            default:
                console.log('Не известный state')
        }

        localStorage.setItem('likedCards', JSON.stringify(newState));
    }

    const cardHandler = (event, item) => {
        if (event.target.id === 'likeCounter' || event.target.id === 'likeImg')  {
            return null;
        } else {
            return openModal(<ItemPopupContent item={item} closeModal={closeModal}/>, true);
        }
    }
    const likeHandler = (event) => {
        const mainCard = event.target.closest('#card');
        switch (event.target.id) {
            case "likeContainer":
                const target = event.target.querySelector('#likeImg');
                if (target.dataset.state === 'default') {
                    target.dataset.state = 'filled';
                    target.src = likeFilledImg;
                    localStorageHandler(mainCard.dataset.id, 'ADD');
                } else {
                    target.dataset.state = 'default';
                    target.src = likeImg;
                    localStorageHandler(mainCard.dataset.id, 'REMOVE');
                }
                break;
            case "likeImg":
                event.target.src = likeFilledImg;
                if (event.target.dataset.state === 'default') {
                    event.target.dataset.state = 'filled';
                    event.target.src = likeFilledImg;
                    localStorageHandler(mainCard.dataset.id, 'ADD');
                } else {
                    event.target.dataset.state = 'default';
                    event.target.src = likeImg;
                    localStorageHandler(mainCard.dataset.id, 'REMOVE');
                }
        }
    }
    const filteredCards = () => {
        const cards = JSON.parse(localStorage.getItem('likedCards'));

        if (cards.length > 0) {
            const filteredCards = cardData.cards.cards.map((card) => {
                console.log(cards)
                if (cards.includes(card.id)) {
                    return card
                }
            }).filter((item) => item !== undefined)

            setPreparedCards(filteredCards);
            dispatch(filteredData(filteredCards));
            setIsFiltered(true);
        } else {
            return null
        }
    }

    const allCards = () => {
        setPreparedCards(null);
        setIsFiltered(!isFiltered);
    }
    return (
        <div className={styles.general}>
            <Header openModal={openModal} closeModal={closeModal} filteredCards={filteredCards} isFiltered={isFiltered} allCards={allCards}/>
            <MainContainer isFiltered={isFiltered} prepaderCards={preparedCards} cardHandler={cardHandler} likeHandler={likeHandler} openModal={openModal} closeModal={closeModal} setIsOpen={setIsOpen} setModalComponent={setModalComponent} modalComponent={modalComponent} isOpen={isOpen}/>
            <Footer/>
        </div>
    );
};

export default General;

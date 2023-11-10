import './App.css';
import General from "./components/General/General";
import {useState, CSSProperties} from "react";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromServer } from './services/actions/cardAction';
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderColor: "#3839bc",
};

function App() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const [isOpen, setIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.cardReducer);

    const initLocalStorage = () => {
        const initState = JSON.parse(localStorage.getItem('likedCards')) || [];
        if (!initState.length) {
            localStorage.setItem('likedCards', JSON.stringify(initState));
        }
        return initState;
    }

    const openModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    const closeModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    useEffect(() => {
        initLocalStorage()
        dispatch(fetchDataFromServer());
    }, [dispatch]);

    useEffect(() => {
        console.log(cardData)
    }, [cardData]);

    if (cardData.cards.length === 0) {
        return (
            <div className="App">
                <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    } else {
        return (
            <div className="App">
                <General openModal={openModal} closeModal={closeModal} setModalComponent={setModalComponent} setIsOpen={setIsOpen} modalComponent={modalComponent} isOpen={isOpen}/>
            </div>
        );
    }
}

export default App;

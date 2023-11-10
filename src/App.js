import './App.css';
import General from "./components/General/General";
import {useState} from "react";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromServer } from './services/actions/cardAction';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.cardReducer);
    const openModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    const closeModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    // useEffect(() => {
    //     dispatch(fetchDataFromServer());
    // }, [dispatch]);

    // useEffect(() => {
    //     console.log(cardData);
    // }, [cardData]);

  return (
    <div className="App">
      <General openModal={openModal} closeModal={closeModal} setModalComponent={setModalComponent} setIsOpen={setIsOpen} modalComponent={modalComponent} isOpen={isOpen}/>
    </div>
  );
}

export default App;

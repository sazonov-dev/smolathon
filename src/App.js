import './App.css';
import General from "./components/General/General";
import {useState} from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);
    const openModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }

    const closeModal = (component, state) => {
        setModalComponent(component);
        setIsOpen(state);
    }
  return (
    <div className="App">
      <General openModal={openModal} closeModal={closeModal} setModalComponent={setModalComponent} setIsOpen={setIsOpen} modalComponent={modalComponent} isOpen={isOpen}/>
    </div>
  );
}

export default App;

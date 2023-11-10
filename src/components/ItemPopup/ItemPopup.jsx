import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from './ItemPopup.module.css';
import st from '../ItemPopupContent/ItemPopupContent.module.css'

const ItemPopup = ({children, closeModal}) => {
    const keyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal(null, false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDown);

        return () => {
            document.removeEventListener('keydown', keyDown);
        }
    }, []);

    return ReactDOM.createPortal(
        <>
            <div className={styles.itemPopup}>
                {children}
                <div className={st.closeIcon} onClick={() => closeModal(null, false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M23.707 0.292786C23.5195 0.105315 23.2652 0 23 0C22.7349 0 22.4806 0.105315 22.293 0.292786L12 10.5858L1.70703 0.292786C1.5195 0.105315 1.26519 0 1.00003 0C0.734866 0 0.480558 0.105315 0.293031 0.292786C0.10556 0.480314 0.000244141 0.734622 0.000244141 0.999786C0.000244141 1.26495 0.10556 1.51926 0.293031 1.70679L10.586 11.9998L0.293031 22.2928C0.10556 22.4803 0.000244141 22.7346 0.000244141 22.9998C0.000244141 23.2649 0.10556 23.5193 0.293031 23.7068C0.480558 23.8943 0.734866 23.9996 1.00003 23.9996C1.26519 23.9996 1.5195 23.8943 1.70703 23.7068L12 13.4138L22.293 23.7068C22.4806 23.8943 22.7349 23.9996 23 23.9996C23.2652 23.9996 23.5195 23.8943 23.707 23.7068C23.8945 23.5193 23.9998 23.2649 23.9998 22.9998C23.9998 22.7346 23.8945 22.4803 23.707 22.2928L13.414 11.9998L23.707 1.70679C23.8945 1.51926 23.9998 1.26495 23.9998 0.999786C23.9998 0.734622 23.8945 0.480314 23.707 0.292786Z" fill="#3B3748"/>
                    </svg>
                </div>
            </div>
            <ModalOverlay closeModal={closeModal}/>
        </>,
        document.getElementById('portal')
    )
};

export default ItemPopup;

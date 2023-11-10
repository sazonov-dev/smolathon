import React, {useState} from 'react';
import styles from './MainContainer.module.css';
import testImg from '../../images/img-01.jpeg';
import likeFilledImg from '../../images/heart-filled.svg';
import likeImg from '../../images/like.svg';
import itemPopup from "../ItemPopup/ItemPopup";
import ItemPopupContent from "../ItemPopupContent/ItemPopupContent";
import ItemPopup from "../ItemPopup/ItemPopup";

const MainContainer = ({openModal, closeModal, isOpen, modalComponent}) => {
    const cardHandler = (event) => {
        if (event.target.id === 'likeCounter' || event.target.id === 'likeImg')  {
            return null;
        } else {
            return openModal(<ItemPopupContent closeModal={closeModal}/>, true);
        }
    }
    const likeHandler = (event) => {
        switch (event.target.id) {
            case "likeContainer":
                const target = event.target.querySelector('#likeImg');
                if (target.dataset.state === 'default') {
                    target.dataset.state = 'filled';
                    target.src = likeFilledImg;
                } else {
                    target.dataset.state = 'default';
                    target.src = likeImg;
                }
                break;
            case "likeImg":
                event.target.src = likeFilledImg;
                if (event.target.dataset.state === 'default') {
                    event.target.dataset.state = 'filled';
                    event.target.src = likeFilledImg;
                } else {
                    event.target.dataset.state = 'default';
                    event.target.src = likeImg;
                }
        }
    }

    return (
        <div className={styles.mainContainer}>
            <section className={styles.gridSectionContainer}>
                <div className={styles.gridSection}>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>
                    <article className={styles.gridItem} onClick={cardHandler} id="card">
                        <div className={styles.gridItemLike} onClick={likeHandler} id="likeContainer">
                            <img className="likeImg" src={likeImg} alt="Иконка лайка" id="likeImg" data-state="defalut"/>
                        </div>
                        <img className={styles.gridItemImg} src={testImg} alt="Фотография смоленская крепость"/>
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>Смоленская крепость</h2>
                            <p className={styles.description}>Смоленский кремль возводился с 1596 по 1602 год под руководством знаменитого зодчего Федора Коня. Уже через 7 лет после постройки крепость проверяла на прочность армия польского короля Сигизмунда III. Осада длилась до весны 1611 г. В 1812 году приходили французы, а в 1941 — немцы. До наших дней крепость уцелела не полностью. Из 39 башен сохранилось только 18. Но и сейчас Смоленский кремль выглядит впечатляюще и является главным символом города.</p>
                        </div>
                    </article>

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

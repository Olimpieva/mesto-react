
import React, { memo } from "react";

function Card(props) {

    const { card, userId } = props;

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <div id="card-template">
            <li className="card">
                <img className="card__image" src={card.link} alt="#" onClick={handleCardClick} />
                <div className="card__info">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like-info">
                        <button className="card__like" type="button" aria-label="Поставить лайк"></button>
                        <span className="card__like-counter">{card.likes.length}</span>
                    </div>
                </div>
                {card.owner._id === userId && (
                    <button className="card__remove" type="button" aria-label="Удалить изображение" ></button>
                )}
            </li>
        </div>
    );
}

export default memo(Card);
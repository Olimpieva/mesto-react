
import React, { useRef } from "react";

function ImagePopup({ card, onClose }) {

    const overlayRef = useRef(null);

    function onOverlayClick(event) {
        console.log({ event, ref: overlayRef.current })
        if (event.target === overlayRef.current) {
            onClose()
        }
    }

    return (
        <div class={`popup popup-image ${card.link && 'popup_is-opened'}`} ref={overlayRef} onClick={onOverlayClick}>
            <div class="popup-image__container">
                <button class="popup__button popup__button_action_close" type="button" onClick={onClose}></button>
                <img class="popup-image__image" src={card.link} alt="#" />
                <h2 class="popup-image__title">{card.name}</h2>
            </div>
        </div>
    )

}

export default ImagePopup;
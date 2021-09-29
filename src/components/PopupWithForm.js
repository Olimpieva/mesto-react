
import React, { useRef } from "react";

function PopupWithForm(props) {

    const overlayRef = useRef(null);

    function onOverlayClick(event) {
        console.log({ event, ref: overlayRef.current })
        if (event.target === overlayRef.current) {
            props.onClose()
        }
    }

    return (
        <div className={`popup popup-${props.name} ${props.isOpen && 'popup_is-opened'}`} ref={overlayRef} onClick={onOverlayClick}>
            <div className="popup__container">
                <form className={`popup__form popup__form-${props.name}`} name={`popup-${props.name}`}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__button popup__button_action_save" type="submit">{props.buttonText}</button>
                </form>
                <button className="popup__button popup__button_action_close" type="button" aria-label="Закрыть окно" onClick={props.onClose}></button>
            </div>
        </div>
    )
}

export default PopupWithForm;
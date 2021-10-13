
import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    const { isOpen, onClose, onAddPlace } = props;
    const nameRef = useRef();
    const imageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddPlace({
            name: nameRef.current.value,
            link: imageRef.current.value,
        })
    }

    return (
        <PopupWithForm name="card" title="Новое место" buttonText="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <fieldset className="popup__input-fieldset">
                <input className="popup__input popup__input_type_caption" id="card-name" name="name"
                    type="text"
                    minLength="2"
                    maxLength="30"
                    placeholder="Название"
                    ref={nameRef}
                    required />
                <span className="popup__input-error" id="card-name-error"></span>
            </fieldset>
            <fieldset className="popup__input-fieldset">
                <input className="popup__input popup__input_type_link" id="card-link" name="link"
                    type="url"
                    placeholder="Ссылка на картинку"
                    ref={imageRef}
                    required />
                <span className="popup__input-error" id="card-link-error"></span>
            </fieldset>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
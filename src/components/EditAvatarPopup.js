
import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const { isOpen, onClose, onUpdateAvatar } = props;
    const avatarRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        })
    }

    return (
        <PopupWithForm name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <fieldset className="popup__input-fieldset">
                <input className="popup__input popup__input_type_link" id="avatar-link" name="avatar"
                    type="url"
                    placeholder="Ссылка на картинку"
                    ref={avatarRef || ''}
                    required />
                <span className="popup__input-error"
                    id="avatar-link-error"></span>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
// import logo from '../logo.svg';
import React, { useState } from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handlerCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handlerCardClick}
      />
      <Footer />

      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__input-fieldset">
          <input className="popup__input popup__input_type_link" id="avatar-link" type="url" value="" onChange={() => { }}
            placeholder="Ссылка на картинку" name="avatar" required />
          <span className="popup__input-error" id="avatar-link-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__input-fieldset">
          <input className="popup__input popup__input_type_name" id="profile-name" type="text" value="" onChange={() => { }}
            placeholder="Введите имя" name="name" minLength="2" maxLength="40" required />
          <span className="popup__input-error" id="profile-name-error"></span>
        </fieldset>
        <fieldset className="popup__input-fieldset">
          <input className="popup__input popup__input_type_caption" id="profile-caption" type="text" value="" onChange={() => { }}
            placeholder="Введите описание" name="about" minLength="2" maxLength="200" required />
          <span className="popup__input-error" id="profile-caption-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="card" title="Новое место" buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__input-fieldset">
          <input className="popup__input popup__input_type_caption" id="card-name" type="text" value="" onChange={() => { }}
            placeholder="Название" name="name" minLength="2" maxLength="30" required />
          <span className="popup__input-error" id="card-name-error"></span>
        </fieldset>
        <fieldset className="popup__input-fieldset">
          <input className="popup__input popup__input_type_link" id="card-link" type="url" value="" onChange={() => { }}
            placeholder="Ссылка на картинку" name="link" required />
          <span className="popup__input-error" id="card-link-error"></span>
        </fieldset>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />

    </div>
  );
}

export default App;
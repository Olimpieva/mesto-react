
import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Profile from './Profile';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setuserDescription] = useState('');
    const [userAvatar, setuserAvatar] = useState('');
    const [cards, setCards] = useState([]);
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        api.getUserInfo()
            .then(userData => {
                setUserId(userData._id)
                setUserName(userData.name);
                setuserDescription(userData.about);
                setuserAvatar(userData.avatar);
            })
            .catch(error => console.log(`Произошла ошибка: ${error}`));
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then(initialCards => {
                setCards(initialCards);
            })
            .catch(error => console.log(`Произошла ошибка: ${error}`));
    }, [])

    return (
        <main className="content">

            <section className="profile content__profile">
                <Profile
                    userName={userName}
                    userDescription={userDescription}
                    userAvatar={userAvatar}
                    onEditAvatar={onEditAvatar}
                    onEditProfile={onEditProfile}
                    onAddPlace={onAddPlace} />
            </section>

            <section className="gallery content__gallery">
                <ul className="cards">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} userId={userId}
                            onCardClick={onCardClick} />
                    ))}
                </ul>
            </section>

        </main>
    )
}

export default Main;
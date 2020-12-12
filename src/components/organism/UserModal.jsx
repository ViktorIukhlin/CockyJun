import React, { useState } from 'react'
import Notification from './Notification'

const UserModal = ({ onClose, onSubmit, user, notification }) => {
    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [city, setCity] = useState(user.city)
    return (
        <div className="user-modal">
            <Notification show={notification} />
            <div className="user-modal__header">
                <div className="user-modal__img-box">
                    <img src="https://www.pngrepo.com/png/238457/512/left-arrow-back.png" alt="" onClick={() => onClose(false)} />
                </div>
            </div>
            <div className="user-modal__form">
                <input name="name" placeholder="Имя" autocomplete="off" value={name} onChange={e => setName(e.target.value)} />
                <input name="age" placeholder="Возраст" autocomplete="off" value={age} onChange={e => setAge(e.target.value)} />
                <input name="city" placeholder="Город" autocomplete="off" value={city} onChange={e => setCity(e.target.value)} />
                <button type="button" onClick={() => onSubmit(name, age, city)}>
                    Сохранить
                </button>
            </div>
        </div>
    )
}

export default UserModal

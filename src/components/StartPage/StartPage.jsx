import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Settings from '../../Settings/Settings'

import { Question, addDateToLocalStorage, getDateFromLocalStorage } from '../../api/api'
import UserModal from '../organism/UserModal'
import Notification from '../organism/Notification'

const StartPage = ({ changeTimer, timerOn, user, setUser }) => {
    const [modal, setModal] = useState(false)
    const [notification, setNotification] = useState(false)

    // const localStorage = getDateFromLocalStorage()
    // const question = {
    //     text: 'Privet',
    //     date: new Date().toLocaleDateString(),
    //     time: new Date().toLocaleTimeString(),
    //     sex: 'net'
    // }
    // const goToDataBase = e => {
    //     e.preventDefault()
    //     addDateToLocalStorage(question)
    //     // Question.create(question).then(() => {
    //     //     console.log('finished')
    //     // })
    // }
    const handleSubmit = (name, age, city) => {
        setUser({ ...user, name: name, age: age, city: city })
        setNotification(true)
        setTimeout(() => {
            setNotification(false)
        }, 1000)
    }

    return modal ? (
        <UserModal onClose={setModal} onSubmit={handleSubmit} user={user} notification={notification} />
    ) : (
        <>
            <div className="start-page-container">
                <div className="start-page-container__header">
                    <div className="start-page-container__user-box">
                        <img
                            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                            alt=""
                            onClick={() => setModal(true)}
                        />
                    </div>
                </div>
                <Settings changeTimer={changeTimer} timerOn={timerOn} />
                <NavLink to="/questionsPage">
                    <button className="start-page-container__button" to="/questionsPage">
                        START
                    </button>
                </NavLink>
                {/* <button className={style.button} onClick={goToDataBase}>
                DATABASE
            </button> */}
            </div>
        </>
    )
}

export default StartPage

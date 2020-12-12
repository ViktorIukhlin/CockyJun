import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Settings from '../../Settings/Settings'
import store from './../../JSON/bd.json'
import { Question, addDateToLocalStorage, getDateFromLocalStorage } from '../../api/api'
import UserModal from '../organism/UserModal'
import QuestionsPage from '../QuestionsPage/QuestionsPage'

const StartPage = ({ changeTimer, timerOn, user, setUser, amountOfTime }) => {
    const [modal, setModal] = useState(false)
    const [notification, setNotification] = useState(false)
    const [startApp, setStartApp] = useState(false)
    const [date, setDate] = useState({})
    console.log('timerOn', timerOn)
    console.log('amountOfTime', amountOfTime)

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
    ) : startApp ? (
        <QuestionsPage state={date.sort(() => Math.random() - 0.5)} countTimer={amountOfTime} timerOn={timerOn} onClose={setStartApp} />
    ) : (
        <>
            <div className="start-page-container">
                <div className="start-page-container__header">
                    <div className="start-page-container__box">
                        <div className="start-page-container__user-box">
                            <img
                                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                                alt=""
                                onClick={() => setModal(true)}
                            />
                        </div>
                        <p>{user.name}</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + `/img/Logo1.svg`} alt="" />
                </div>
                <Settings changeTimer={changeTimer} timerOn={timerOn} />

                {Object.keys(store).map(item => {
                    return (
                        <div
                            className="start-page-container__card-box"
                            onClick={() => {
                                setDate(store[item].questions)
                                setStartApp(true)
                            }}
                        >
                            <div className="start-page-container__box-img">
                                <img src={process.env.PUBLIC_URL + `/img/${store[item].description.img}`} alt="" />
                            </div>
                            <div className="start-page-container__box-content">
                                <h2>{store[item].description.name}</h2>
                                <p>{store[item].description.about}</p>
                                <div
                                    className={
                                        store[item].description.lvl < 5 ? 'start-page-container__lvl-1' : 'start-page-container__lvl-2'
                                    }
                                >
                                    Уровень сложности: {store[item].description.lvl} из 10
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <button className={style.button} onClick={goToDataBase}>
                DATABASE
            </button> */}
            </div>
        </>
    )
}

export default StartPage

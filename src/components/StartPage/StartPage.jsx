import React from 'react'
import { NavLink } from 'react-router-dom'
import Settings from '../../Settings/Settings'
import style from './StartPage.module.scss'

import { Question, addDateToLocalStorage, getDateFromLocalStorage } from '../../api/api'

const StartPage = ({ changeTimer, timerOn }) => {
    const localStorage = getDateFromLocalStorage()
    const question = {
        text: 'Privet',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        sex: 'net'
    }
    const goToDataBase = e => {
        e.preventDefault()
        addDateToLocalStorage(question)
        // Question.create(question).then(() => {
        //     console.log('finished')
        // })
    }
    console.log('localStorage', localStorage)
    return (
        <div className={style.container}>
            <Settings changeTimer={changeTimer} timerOn={timerOn} />
            <NavLink to="/questionsPage">
                <button className={style.button} to="/questionsPage">
                    START
                </button>
            </NavLink>
            {/* <button className={style.button} onClick={goToDataBase}>
                DATABASE
            </button> */}
        </div>
    )
}

export default StartPage

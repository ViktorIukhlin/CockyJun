import React from 'react'
import { Link } from 'react-router-dom'
import style from './EndPage.module.scss'

const EndPage = ({ counter, wrongAnswers, onClose }) => {
    return (
        <div className={style.containerCopy}>
            Правильных ответов {counter - wrongAnswers} из {counter}
            <div onClick={() => onClose(false)} className={style.buttonReturn}>
                Заново
            </div>
        </div>
    )
}

export default EndPage

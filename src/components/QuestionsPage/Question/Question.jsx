import React from 'react'
import style from './Question.module.scss'

const Question = ({ question, questionImg, answers, sendAnswers }) => {
    return (
        <div className={style.container}>
            <div className={style.question}>
                <div>{question}</div>
                <div className={style.imgBox}>
                    {questionImg && <img src={process.env.PUBLIC_URL + `/img/${questionImg}`} alt="question" />}
                </div>
            </div>
            <div className={style.boxForAnswer}>
                <div className={style.answer} onClick={sendAnswers}>
                    {answers[0]}
                </div>
                <div className={style.answer} onClick={sendAnswers}>
                    {answers[1]}
                </div>
                <div className={style.answer} onClick={sendAnswers}>
                    {answers[2]}
                </div>
                <div className={style.answer} onClick={sendAnswers}>
                    {answers[3]}
                </div>
            </div>
        </div>
    )
}

export default Question

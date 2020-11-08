import React, { useState } from 'react';
import style from './Question.module.scss'

const Question = ({question, answers, sendAnswers }) => {
  return (
    <div className={style.container}>
      <div className={style.question}>
        <div>{question}</div>
      </div>
      <form className={style.boxForAnswer}>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answers[0]}/>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answers[1]}/>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answers[2]}/>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answers[3]}/>
      </form>
    </div>
  )
}

export default Question;
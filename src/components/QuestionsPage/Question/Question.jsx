import React, { useState } from 'react';
import style from './Question.module.scss'

const Question = ({answer, sendAnswers }) => {
  const answersRandom = answer.answers.sort(() => Math.random() - 0.5);

  const setAnswer = (e) =>{
    console.log(e)
    console.log(e.target.defaultValue)
  }

  return (
    <div className={style.container}>
      <div className={style.question}>
        <div>{answer.question}</div>
      </div>
      <form className={style.boxForAnswer}>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answersRandom[0]}/>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answersRandom[1]}/>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answersRandom[2]}/>
        <input type="button" className={style.answer} onClick={sendAnswers} value={answersRandom[3]}/>
      </form>
    </div>
  )
}

export default Question;
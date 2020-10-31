import React, { useState } from 'react';
import style from './Question.module.scss'

const Question = ({state}) => {
  const answers = state.answers.sort(() => Math.random() - 0.5);

  const setAnswer = (e) =>{
    
    console.log(e)
    console.log(e.target.defaultValue)
  }

  return (
    <div className={style.container}>
      <div className={style.question}>
        <div>{state.question}</div>
      </div>
      <form className={style.boxForAnswer}>
        <input type="button" className={style.answer} onClick={setAnswer} value={answers[0]}/>
        <input type="button" className={style.answer} onClick={setAnswer} value={answers[1]}/>
        <input type="button" className={style.answer} onClick={setAnswer} value={answers[2]}/>
        <input type="button" className={style.answer} onClick={setAnswer} value={answers[3]}/>
      </form>
    </div>
  )
}

export default Question;
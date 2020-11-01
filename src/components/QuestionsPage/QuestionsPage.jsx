import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import style from './QuestionsPage.module.scss'

const QuestionsPage = ({state}) => {
  const arrQuestions = state.questions.sort(() => Math.random() - 0.5);
  state.numberOfQuestions = arrQuestions.length;
  const [counter, setCounter] = useState(state.counter);
  
  if(counter === state.numberOfQuestions){
    return <div>
      Ты ответил на {counter} вопроса , поздравляю 
      <NavLink to='/startPage'> Заново </NavLink>
    </div>
  }

  const question = state.questions[counter].question
  const answers = state.questions[counter].answers.sort(() => Math.random() - 0.5);

  const sendAnswers = () => {
    setCounter(counter + 1)
  }
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

export default QuestionsPage;
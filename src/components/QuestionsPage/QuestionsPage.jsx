import React, { useEffect, useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import Question from './Question/Question'
import style from './QuestionsPage.module.scss'
import ResultWindow from './ResultWindow/ResultWindow'

const QuestionsPage = ({ listOfQuestions }) => {
  const [answers, setAnswers] = useState(listOfQuestions);
  const [counter, setCounter] = useState(0);
  const [resultWindow, setResultWindow] = useState(false);
  const [answerFromPlayer, setAnswerFromPlayer] = useState('');
  // useEffect(() => {
  //   console.log(answers)
  //   console.log('RANDOM')
  // }, []);
  const sendAnswers = (e) => {
    setAnswerFromPlayer(e.target.defaultValue)
    setResultWindow(true)
  }
  const nextQuestion = () => {
    setCounter(counter + 1)
    setResultWindow(false)
  }
  return (
    <div className={style.container}>
      {counter === answers.length ? (
        <div>
          Ты ответил на {counter} вопроса , поздравляю
          <NavLink to="/startPage"> Заново </NavLink>
        </div>
      ): resultWindow ? (
        <ResultWindow answer={answerFromPlayer} rightAnswer={answers[counter].correctAnswer} nextQuestion={nextQuestion}/>
      ) : (
        <Question sendAnswers={sendAnswers} answer={answers[counter]}/>
      )}
    </div>
  )
}

export default QuestionsPage

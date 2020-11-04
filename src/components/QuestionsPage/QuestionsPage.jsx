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
  const [wrongAnswer, setWrongAnswer] = useState(0); 
  // useEffect(() => {
  //   console.log(answers)
  //   console.log('RANDOM')
  // }, []);
  const sendAnswers = (e) => {
    setAnswerFromPlayer(e.target.defaultValue)
    setResultWindow(true)
  }
  const nextQuestionTrue = () => {
    setResultWindow(false)
    setCounter(counter + 1)
  }
  const nextQuestionFalse = () => {
    setWrongAnswer(wrongAnswer + 1)
    setResultWindow(false)
    setCounter(counter + 1)
  }
  return (
    <div className={style.container}>
      {counter === answers.length ? (
        <div className={style.containerCopy}>
          Правильных ответов {counter - wrongAnswer} из {counter}
          <NavLink to="/startPage"> Заново </NavLink>
        </div>
      ): resultWindow ? (
        <ResultWindow answer={answerFromPlayer} rightAnswer={answers[counter].correctAnswer} nextQuestionTrue={nextQuestionTrue} nextQuestionFalse={nextQuestionFalse}/>
      ) : (
        <Question sendAnswers={sendAnswers} answer={answers[counter]}/>
      )}
    </div>
  )
}

export default QuestionsPage

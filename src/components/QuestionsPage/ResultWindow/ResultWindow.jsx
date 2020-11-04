import React from 'react';
import style from './ResultWindow.module.scss'

const ResultWindow = ({answer, rightAnswer, nextQuestion}) => {
  const bool = answer === rightAnswer;
  return (
    <div className={style.container} style={bool ? {border: "#DCF5EB solid 5px"} : {border: "#FCE4DF solid 5px"}}>
      {bool ? (
        <div className={style.result} style={{color: '#45C38A'}}>
          <div>Вы ответили абсолютно верно!</div>
        </div>
      ) : (
        <div className={style.result} style={{color: '#EE593B'}}>
          <div className={style.message}>Вы ответили неверно! Правильный ответ:</div>
          <div className={style.answer}>{rightAnswer}</div>
        </div>
      )}
      <button onClick={nextQuestion}>Следующий вопрос</button>
    </div>
  )
}

export default ResultWindow;
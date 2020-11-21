import React from "react";
import style from "./Question.module.scss";

const Question = ({ question, questionImg, answers, sendAnswers }) => {
  return (
    <div className={style.container}>
      <div className={style.question}>
        {questionImg ? (
          <img
            src={process.env.PUBLIC_URL + `/img/${questionImg}`}
            alt="question"
          />
        ) : (
          <div>{question}</div>
        )}
      </div>
      <div className={style.boxForAnswer}>
        <button className={style.answer} onClick={sendAnswers}>
          {answers[0]}
        </button>
        <button className={style.answer} onClick={sendAnswers}>
          {answers[1]}
        </button>
        <button className={style.answer} onClick={sendAnswers}>
          {answers[2]}
        </button>
        <button className={style.answer} onClick={sendAnswers}>
          {answers[3]}
        </button>
      </div>
    </div>
  );
};

export default Question;

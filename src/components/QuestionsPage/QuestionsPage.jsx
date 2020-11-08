import React, { useEffect, useState } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import Question from "./Question/Question";
import style from "./QuestionsPage.module.scss";
import ResultWindow from "./ResultWindow/ResultWindow";

const QuestionsPage = ({ listOfQuestions }) => {
  const [state, setState] = useState(listOfQuestions);
  const [counter, setCounter] = useState(0);
  const [resultWindow, setResultWindow] = useState(false);
  const [answerFromPlayer, setAnswerFromPlayer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState(0);
  let countTimer = 10;
  const [timer, setTimer] = useState(countTimer);
  const [timeOff, setTimeOff] = useState(false)

  const [question, setQuestion] = useState(0);
  const [answersRandom, setAnswersRandom] = useState(0);



  useEffect(() => {
    if (counter === state.length) return;
    setAnswersRandom(state[counter].answers.sort(() => Math.random() - 0.5));
    setQuestion(state[counter].question);
    setTimer(countTimer);
  }, [counter]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!resultWindow ){
      timer !== 0 ? (
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000)
      ) : (
        setTimeOff(true)
      )
    }else{
      return false
    }  
  }, [timer]);

  const sendAnswers = (e) => {
    setAnswerFromPlayer(e.target.defaultValue);
    setResultWindow(true);
  };
  const nextQuestionTrue = () => {
    setTimeOff(false)
    setResultWindow(false);
    setCounter(counter + 1);
  };
  const nextQuestionFalse = () => {
    setTimeOff(false)
    setWrongAnswer(wrongAnswer + 1);
    setResultWindow(false);
    setCounter(counter + 1);
  };

  const showResultWindow = () => {
    return <ResultWindow
      answer={answerFromPlayer}
      rightAnswer={state[counter].correctAnswer}
      nextQuestionTrue={nextQuestionTrue}
      nextQuestionFalse={nextQuestionFalse}
      timeOff={timeOff}
    />;
  };

  return (
    <div className={style.container}>
      {counter === state.length ? (
        <div className={style.containerCopy}>
          Правильных ответов {counter - wrongAnswer} из {counter}
          <Link to="/startPage" className={style.buttonReturn}>
            Заново
          </Link>
        </div>
      ) : resultWindow || timeOff ? (
        showResultWindow()
      ) : (
        <>
           {timer && 
           <div className={style.timer} style={timer < 5 ? {color: '#EE593B'} : {}}>
            {timer >= 10 ? `00:${timer}` : `00:0${timer}`}
           </div>}
          <Question
            sendAnswers={sendAnswers}
            answers={answersRandom}
            question={question}
          />
        </>
      )}
    </div>
  );
};

export default QuestionsPage;

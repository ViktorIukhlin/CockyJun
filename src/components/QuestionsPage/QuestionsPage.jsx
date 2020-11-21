import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Question from "./Question/Question";
import style from "./QuestionsPage.module.scss";
import ResultWindow from "./ResultWindow/ResultWindow";

const QuestionsPage = ({ state, countTimer, timerOn}) => {
  const [counter, setCounter] = useState(0);
  const [resultWindow, setResultWindow] = useState(false);
  const [answerFromPlayer, setAnswerFromPlayer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [timer, setTimer] = useState(countTimer);
  const [timeOff, setTimeOff] = useState(false)

  const [question, setQuestion] = useState('');
  const [questionImg, setQuestionImg] = useState('');
  const [answersRandom, setAnswersRandom] = useState([]);

  useEffect(() => {
    if(!timerOn) return 
    if(timer !== 0) {
      const localTimer = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(localTimer);
    }
    setTimeOff(true)
  }, [timer, timerOn]);

  useEffect(() => {
    if (counter === state.length) return () => {};
    setAnswersRandom(state[counter].answers.sort(() => Math.random() - 0.5));
    setQuestion(state[counter].question);
    setQuestionImg(state[counter].questionImg);
    setTimer(countTimer);
  }, [counter, countTimer, state]);

  const sendAnswers = (e) => {
    setAnswerFromPlayer(e.target.outerText);
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
    <>
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
           {timerOn && 
           <div className={style.timer} style={timer < 5 ? {color: '#EE593B'} : {}}>
            {timer >= 10 ? `00:${timer}` : `00:0${timer}`}
           </div>}
          <Question
            sendAnswers={sendAnswers}
            answers={answersRandom}
            question={question}
            questionImg={questionImg}
          />
        </>
      )}
    </>
  );
};

export default QuestionsPage;

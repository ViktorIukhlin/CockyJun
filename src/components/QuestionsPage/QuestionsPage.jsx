import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EndPage from './EndPage/EndPage'
import ProgressBar from './ProgressBar/ProgressBar'
import Question from './Question/Question'
import style from './QuestionsPage.module.scss'
import ResultWindow from './ResultWindow/ResultWindow'

const QuestionsPage = ({ state, countTimer, timerOn }) => {
    const [counter, setCounter] = useState(0)
    const [resultWindow, setResultWindow] = useState(false)
    const [answerFromPlayer, setAnswerFromPlayer] = useState('')
    const [wrongAnswers, setWrongAnswers] = useState(0)
    const [timer, setTimer] = useState(countTimer)
    const [timeOff, setTimeOff] = useState(false)
    const [allQuestions, setAllQuestions] = useState(0)

    const [question, setQuestion] = useState('')
    const [questionImg, setQuestionImg] = useState('')
    const [answersRandom, setAnswersRandom] = useState([])

    useEffect(() => {
        if (!timerOn || resultWindow) return
        if (timer !== 0) {
            const localTimer = setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
            return () => clearTimeout(localTimer)
        }
        sendAnswers()
    }, [resultWindow, timer, timerOn])

    useEffect(() => {
        if (counter >= state.length) return () => {}
        setAnswersRandom(state[counter].answers.sort(() => Math.random() - 0.5))
        setQuestion(state[counter].question)
        setQuestionImg(state[counter].questionImg)
        setTimer(countTimer)
    }, [counter, countTimer, state])

    const sendAnswers = e => {
        e?.target.outerText ? setAnswerFromPlayer(e.target.outerText) : setTimeOff(true)
        setCounter(counter + 1)
        setResultWindow(true)
    }
    const nextQuestion = bool => {
        setTimeOff(false)
        setAllQuestions(allQuestions + 1)
        !bool && setWrongAnswers(wrongAnswers + 1)
        setResultWindow(false)
    }
    return (
        <>
            <ProgressBar currentSize={allQuestions} size={state.length} />
            {allQuestions === state.length ? (
                <EndPage counter={allQuestions} wrongAnswers={wrongAnswers} />
            ) : resultWindow || timeOff ? (
                <ResultWindow
                    answer={answerFromPlayer}
                    rightAnswer={counter === 0 ? state[counter].correctAnswer : state[counter - 1].correctAnswer}
                    nextQuestion={nextQuestion}
                    timeOff={timeOff}
                />
            ) : (
                <>
                    {timerOn && (
                        <div className={style.timer} style={timer < 3 ? { color: '#EE593B' } : {}}>
                            {timer >= 10 ? `00:${timer}` : `00:0${timer}`}
                        </div>
                    )}
                    {setCounter && (
                        <Question sendAnswers={sendAnswers} answers={answersRandom} question={question} questionImg={questionImg} />
                    )}
                </>
            )}
        </>
    )
}

export default QuestionsPage

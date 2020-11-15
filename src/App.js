import React, { useState } from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import './App.scss';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import StartPage from './components/StartPage/StartPage';
import store from './JSON/bd.json'

function App() {
  const [amountOfTime, setAmountOfTime] = useState(10)
  const [timerOn, setTimerOn] = useState(true)
  const changeTimer = () => {
    timerOn ? setTimerOn(false) : setTimerOn(true)
  }
  return (
    <HashRouter>
      <div className='wrapper'>
        <div className='container'>
          <Redirect from='/' to='/startPage'/>
          <Route exact path='/startPage' render={ () => <StartPage changeTimer={changeTimer} timerOn={timerOn}/>} />
          <Route exact path='/questionsPage' render={ () => 
            <QuestionsPage 
            state={store.questions.sort(() => Math.random() - 0.5,)}
            countTimer={amountOfTime}
            timerOn={timerOn}
            />} 
          />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

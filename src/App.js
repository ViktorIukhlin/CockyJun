import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import './App.scss';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import StartPage from './components/StartPage/StartPage';

function App(props) {
  let countTimer = 10;
  return (
    <HashRouter>
      <div className='wrapper'>
        <Redirect from='/' to='/startPage'/>
        <Route exact path='/startPage' render={ () => <StartPage />} />
        <Route exact path='/questionsPage' render={ () => 
          <QuestionsPage 
          state={props.store.getState().questionsPage.questions.sort(() => Math.random() - 0.5,)}
          countTimer={countTimer}
          />} 
        />
      </div>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import style from './App.scss';
import EndPage from './components/EndPage/EndPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import StartPage from './components/StartPage/StartPage';

function App(props) {
  return (
    <HashRouter>
      <div className='wrapper'>
        <Redirect from='/' to='/startPage'/>
        <Route exact path='/startPage' render={ () => <StartPage />} />
        <Route exact path='/questionsPage' render={ () => 
          <QuestionsPage listOfQuestions={props.store.getState().questionsPage.questions.sort(() => Math.random() - 0.5,)}/>} 
        />
      </div>
    </HashRouter>
  );
}

export default App;

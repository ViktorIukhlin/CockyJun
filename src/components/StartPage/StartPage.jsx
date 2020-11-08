import React from 'react';
import { NavLink } from 'react-router-dom';
import Settings from '../../Settings/Settings';
import style from './StartPage.module.scss'

const StartPage = ({changeTimer, timerOn}) => {
  return (
    <div className={style.container}>
      <Settings changeTimer={changeTimer} timerOn={timerOn}/>
      <NavLink to="/questionsPage"> <button className={style.button} to="/questionsPage">START</button> </NavLink>
    </div>
  )
}

export default StartPage;
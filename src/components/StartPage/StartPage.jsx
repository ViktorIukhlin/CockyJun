import React from 'react';
import { NavLink } from 'react-router-dom';
import Settings from '../../Settings/Settings';
import style from './StartPage.module.scss'

const StartPage = ({setTimer}) => {
  return (
    <div className={style.container}>
      <Settings setTimer={setTimer}/>
      <NavLink to="/questionsPage"> <button className={style.button} to="/questionsPage">START</button> </NavLink>
    </div>
  )
}

export default StartPage;
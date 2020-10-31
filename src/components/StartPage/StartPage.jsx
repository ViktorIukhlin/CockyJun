import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './StartPage.module.scss'

const StartPage = () => {
  return (
    <div className={style.container}>
      <NavLink to="/questionsPage"> <button className={style.button} to="/questionsPage">START</button> </NavLink>
    </div>
  )
}

export default StartPage;
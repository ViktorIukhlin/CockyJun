import React from "react";
import style from "./Settings.module.scss";

const Settings = ({changeTimer, timerOn}) => {
  return (
    <div className={style.container}>
      Время
      <button className={style.answer} onClick={changeTimer}> {timerOn ? "ВЫКЛЮЧИТЬ" : "ВКЛЮЧИТЬ"} </button>
    </div>
  );
};

export default Settings;

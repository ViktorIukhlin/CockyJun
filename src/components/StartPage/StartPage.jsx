import React from "react";
import { NavLink } from "react-router-dom";
import Settings from "../../Settings/Settings";
import style from "./StartPage.module.scss";

import { Question } from "../../JSON/db";

const StartPage = ({ changeTimer, timerOn }) => {
    const question = {
        text: "Privet",
        date: "01.01.2001",
    };
    const goToDataBase = (e) => {
        e.preventDefault();
        Question.create(question).then(() => {
            console.log("finished");
        });
    };
    return (
        <div className={style.container}>
            <Settings changeTimer={changeTimer} timerOn={timerOn} />
            <NavLink to="/questionsPage">
                <button className={style.button} to="/questionsPage">
                    START
                </button>
            </NavLink>
            <button className={style.button} onClick={goToDataBase}>
                DATABASE
            </button>
        </div>
    );
};

export default StartPage;

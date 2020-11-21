import React from "react";
import { Link } from "react-router-dom";
import style from "./EndPage.module.scss";

const EndPage = ({ counter, wrongAnswers }) => {
  return (
    <div className={style.containerCopy}>
      Правильных ответов {counter - wrongAnswers} из {counter}
      <Link to="/startPage" className={style.buttonReturn}>
        Заново
      </Link>
    </div>
  );
};

export default EndPage;

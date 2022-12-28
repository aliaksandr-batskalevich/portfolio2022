import s from "./FirstPage.module.scss";
import React from "react";
import {Skills} from "./Skills/Skills";


export const FirstPage = () => {

    // from BLL
    let summary = 'I am a junior JS/React-developer. Until recently, my activity was related to decision-making for tasks in non-standard and critical situations. In my free time I enjoy repairing and designing various mechanisms. In the future, I see myself as a Full Stack Developer. In the near future I plan to improve the English language, and then start studying NodeJS and Java.';


    return (
        <div className={s.firstPage}>
            <div className={s.titleWrapper}>
                <h2>About me</h2>
            </div>
            <div className={s.textInformation}>
                <p>{summary}</p>
            </div>
            <Skills/>
        </div>
    );
};

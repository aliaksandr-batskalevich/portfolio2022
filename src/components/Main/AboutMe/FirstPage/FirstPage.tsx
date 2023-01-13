import s from "./FirstPage.module.scss";
import React, {useState} from "react";
import {Skills} from "./Skills/Skills";
import {useSelector} from "react-redux";
import {getSkills, getSummary} from "../../../../bll/selectors";

export const FirstPage = () => {

    let summary = useSelector(getSummary);
    let skills = useSelector(getSkills);

    // for SkillsComponentControl
    const [isActive, setIsActive] = useState<boolean>(false);

    // handle control
    const setIsActiveHandler = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={s.firstPage}>
            <div className={s.titleWrapper}>
                <h2 onClick={setIsActiveHandler}>About me</h2>
            </div>
            <div className={s.textInformation}>
                <p>{summary}</p>
            </div>
            <Skills skills={skills} isActive={isActive}/>
        </div>
    );
};

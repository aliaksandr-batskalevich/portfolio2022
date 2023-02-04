import s from "./FirstPage.module.scss";
import React from "react";
import {Skills} from "./Skills/Skills";
import {useSelector} from "react-redux";
import {getSkills, getSummary} from "../../../../bll/selectors";

type FirstPagePropsType = {
    isActive: boolean
}

export const FirstPage: React.FC<FirstPagePropsType> = ({isActive}) => {

    let summary = useSelector(getSummary);
    let skills = useSelector(getSkills);


    return (
        <div className={s.firstPage}>
            <div className={s.titleWrapper}>
                <h2>About me</h2>
            </div>
            <div className={s.textInformation}>
                <p>{summary}</p>
            </div>
            <Skills skills={skills} isActive={isActive}/>
        </div>
    );
};

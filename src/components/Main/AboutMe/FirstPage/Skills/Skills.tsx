import React, {useState} from "react";
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {v1} from "uuid";

export const Skills = () => {

    // from BLL :
    let skills = [
        {id: v1(), title: 'HTML/CSS', value: 90},
        {id: v1(), title: 'JS', value: 70},
        {id: v1(), title: 'TS', value: 60},
        {id: v1(), title: 'REACT', value: 60},
        {id: v1(), title: 'REDUX', value: 70},
    ];

    const [isActive, setIsActive] = useState<boolean>(false);
    const setIsActiveHandler = () => {
        setIsActive(!isActive);
    };

    let skillsToRender = skills.map(el => <Skill key={el.id} title={el.title} value={el.value}/>);

    return (
        <div className={s.skillsWrapper}>
            <h3 onClick={setIsActiveHandler}>Skills</h3>
            <div id={s.id} className={s.skillsFlexWrapper}>
                {isActive && skillsToRender}
            </div>
        </div>
    )
}
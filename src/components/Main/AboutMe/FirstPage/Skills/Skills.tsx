import React from "react";
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {SkillType} from "../../../../../bll/aboutMeReducer";

type SkillsPropsType = {
    skills: Array<SkillType>
    isActive: boolean
}

export const Skills: React.FC<SkillsPropsType> = ({skills, isActive}) => {

    let skillsToRender = skills.map(el => <Skill key={el.id} title={el.title} value={el.value}/>);

    return (
        <div className={s.skillsWrapper}>
            <h3>Skills</h3>
            <div id={s.id} className={s.skillsFlexWrapper}>
                {isActive && skillsToRender}
            </div>
        </div>
    )
}
import React, {useState} from "react";
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";

export const Skills = () => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const setIsActiveHandler = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={s.skillsWrapper}>
            <h3 onClick={setIsActiveHandler}>Skills</h3>
            <div className={s.skillsFlexWrapper}>
                {isActive && <>
                    <Skill title={'HTML'} value={90}/>
                    <Skill title={'CSS'} value={75}/>
                    <Skill title={'JS'} value={70}/>
                    <Skill title={'REACT'} value={80}/>
                    <Skill title={'REDUX'} value={70}/>
                </>}
            </div>
        </div>
    )
}
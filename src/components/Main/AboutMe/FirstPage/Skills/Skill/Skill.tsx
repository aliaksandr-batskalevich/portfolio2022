import React, {useState} from "react";
import s from './Skill.module.scss'
import {Diagram} from "./Diagram/Diagram";

type SkillPropsType = {
    title: string
    value: number
}
export const Skill: React.FC<SkillPropsType> = ({title, value}) => {

    const [isFinish, setIsFinish] = useState<boolean>(false);


    return (
        <div className={s.skillWrapper}>
            <div className={s.diagramWrapper}>
                <Diagram
                    radius={100}
                    lineWidth={7}
                    lineColor={'#cf1f1f'}
                    underlineColor={'#cf1f1f2d'}
                    value={value}
                    setIsFinish={setIsFinish}
                />
                {isFinish && <div className={s.value}>{`${value}%`}</div>}
            </div>
            <h4 className={s.skillTitle}>{title}</h4>
        </div>
    )
}



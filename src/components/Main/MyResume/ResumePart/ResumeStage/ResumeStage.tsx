import React from "react";
import s from './ResumeStage.module.scss'
import {StudyType, WorkType} from "../../../../../bll/resumeReduucer";

type ResumeStagePropsType = {
    study?: StudyType
    work?: WorkType
    order: number
    isExperienceActive: boolean
    timeToRenderSec: number
}

export const ResumeStage: React.FC<ResumeStagePropsType> = ({study, work, order, isExperienceActive, timeToRenderSec}) => {
    let title = study
        ? study.institution
        : work
            ? work.workPlace
            : 'Incorrect data!';

    let description = study
        ? study.speciality
        : work
            ? work.position
            : 'Incorrect data!';

    let period = study
        ? study.period
        : work
            ? work.period
            : 'Incorrect data!';


    // 75px - min-height of resumeStageWrapper
    let moveStyle = isExperienceActive ? {top: `${order * 75}px`, transitionDuration: `${timeToRenderSec}s`} : undefined;

    return (
        <div className={s.resumeStageWrapper} style={moveStyle}>
            <div className={s.contentWrapper}>
                <div className={s.arc}/>
                <div className={s.titleWrapper}>
                    <h4>{title}</h4>
                </div>
                <div className={s.textFlexWrapper}>
                    <p>{description}</p>
                    <p>{period}</p>
                </div>
            </div>
        </div>
    )
}
import React, {useState} from "react";
import s from './ResumePart.module.scss'
import {ResumeStage} from "./ResumeStage/ResumeStage";
import {StudyType, WorkType} from "../../../../bll/resumeReduucer";

type ResumePartPropsType = {
    studies?: Array<StudyType>
    workExperience?: Array<WorkType>
    isExperienceActive: boolean
    timeToRenderSec: number
};

export const ResumePart: React.FC<ResumePartPropsType> = ({studies, workExperience, isExperienceActive, timeToRenderSec}) => {


    let title = studies ? 'Studies' : workExperience ? 'Work experience' : 'Incorrect data!';
    let resumeStage = studies
        ? studies.map((st, index) => <ResumeStage key={st.id} study={st} order={index} isExperienceActive={isExperienceActive} timeToRenderSec={timeToRenderSec}/>)
        : workExperience
            ? workExperience.map((w, index) => <ResumeStage key={w.id} work={w} order={index} isExperienceActive={isExperienceActive} timeToRenderSec={timeToRenderSec}/>)
            : 'Incorrect data!';

    return (
        <div className={s.resumePartWrapper}>
            <div className={s.titleWrapper}>
                <h3>{title}</h3>
            </div>
            <div className={s.stageWrapper}>
                {resumeStage}
            </div>
        </div>
    )
}
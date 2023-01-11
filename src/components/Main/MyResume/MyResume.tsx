import React, {useState} from "react";
import s from './MyResume.module.scss'
import {ResumePart} from "./ResumePart/ResumePart";
import {Statistics} from "./Statistics/Statistics";
import {v1} from "uuid";

// from BLL:
export type StudyType = {
    id: string
    institution: string
    speciality: string
    period: string
}
export type WorkType = {
    id: string
    workPlace: string
    position: string
    period: string
}
export type StatisticType = {
    id: string
    title: string
    value: number
}
type ResumeDataType = {
    experience: {
        studies: Array<StudyType>
        workExperience: Array<WorkType>
    }
    statisticsData: Array<StatisticType>
}

let myResumeData: ResumeDataType = {
    experience: {
        studies: [
            {id: v1(), institution: 'IT-INCUBATOR', speciality: 'Front-end developer (React+Typescript)', period: 'MAR 2022 - DEC 2022'},
            {id: v1(), institution: 'IT SCHOOL MYFREEDOM', speciality: 'Front-end developer (HTML, CSS)', period: 'FEB 2022 - MAR 2022'},
            {id: v1(), institution: 'COMMAND AND ENGINEERING INSTITUTE OF THE MINISTRY OF EMERGENCY SITUATIONS OF THE REPUBLIC OF BELARUS', speciality: 'Emergency response engineer', period: 'JUL 2006 - JUL 2010'},
        ],
        workExperience: [
            {id: v1(), workPlace: 'HOME STUDIO', position: 'Craftsman', period: 'JAN 2022 - present time'},
            {id: v1(), workPlace: 'BREST REGIONAL DEPARTMENT OF THE MINISTRY OF EMERGENCY SITUATIONS', position: 'From engineer to chief of fire fighting staff', period: 'AUG 2010 - DEC 2021'},
        ],
    },
    statisticsData:[
        {id: v1(), title: 'Projects', value: 7},
        {id: v1(), title: 'Startups', value: 2},
        {id: v1(), title: 'Hours of study', value: 1896},
        {id: v1(), title: 'Mileage', value: 1376},
    ],
};


export const MyResume = () => {

    // to control the component
    let [isStatisticActive, setIsStatisticActive] = useState<boolean>(false);
    let [isExperienceActive, setIsExperienceActive] = useState<boolean>(false);

    // Handel mode
    const myResumeOnClickHandler = () => {
        setIsStatisticActive(true);
        setIsExperienceActive(true);
    };

    // code for styling myResumePageWrapper (incorrect height incorrect height due to position absolute in resumeStage
    // 75px - min-height of resumeStageWrapper
    const maxExperienceLength = Object.values(myResumeData.experience).reduce((acc, el) => el.length > acc ? el.length : acc, 0);
    const resumePartsWrapperHeightStyle = {height: `${(maxExperienceLength + 1) * 75}px`};

    return (
        <div id="myResume" className={s.myResumePageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2 onClick={myResumeOnClickHandler}>My resume</h2>
                </div>
                <div className={s.resumePartsWrapper} style={resumePartsWrapperHeightStyle}>
                    <ResumePart
                        studies={myResumeData.experience.studies}
                        isExperienceActive={isExperienceActive}
                        timeToRenderSec={2}
                    />
                    <ResumePart
                        workExperience={myResumeData.experience.workExperience}
                        isExperienceActive={isExperienceActive}
                        timeToRenderSec={2}
                    />
                </div>
                <div className={s.statisticsWrapper}>
                    <Statistics
                        isActive={isStatisticActive}
                        statisticsData={myResumeData.statisticsData}
                        timeToRender={2000}
                    />
                </div>
            </div>
        </div>
    )
}
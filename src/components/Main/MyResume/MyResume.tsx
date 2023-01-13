import React, {useState} from "react";
import s from './MyResume.module.scss'
import {ResumePart} from "./ResumePart/ResumePart";
import {Statistics} from "./Statistics/Statistics";
import {useSelector} from "react-redux";
import {getResumeState} from "../../../bll/selectors";


export const MyResume = () => {

    let {experience, statisticsData} = useSelector(getResumeState);

    // to control the component
    let [isStatisticActive, setIsStatisticActive] = useState<boolean>(false);
    let [isExperienceActive, setIsExperienceActive] = useState<boolean>(false);

    // Handle mode
    const myResumeOnClickHandler = () => {
        setIsStatisticActive(true);
        setIsExperienceActive(true);
    };

    // code for styling myResumePageWrapper (incorrect height incorrect height due to position absolute in resumeStage
    // 75px - min-height of resumeStageWrapper
    const maxExperienceLength = Object.values(experience).reduce((acc, el) => el.length > acc ? el.length : acc, 0);
    const resumePartsWrapperHeightStyle = {height: `${(maxExperienceLength + 1) * 75}px`};

    return (
        <div id="myResume" className={s.myResumePageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2 onClick={myResumeOnClickHandler}>My resume</h2>
                </div>
                <div className={s.resumePartsWrapper} style={resumePartsWrapperHeightStyle}>
                    <ResumePart
                        studies={experience.studies}
                        isExperienceActive={isExperienceActive}
                        timeToRenderSec={2}
                    />
                    <ResumePart
                        workExperience={experience.workExperience}
                        isExperienceActive={isExperienceActive}
                        timeToRenderSec={2}
                    />
                </div>
                <div className={s.statisticsWrapper}>
                    <Statistics
                        isActive={isStatisticActive}
                        statisticsData={statisticsData}
                        timeToRender={2000}
                    />
                </div>
            </div>
        </div>
    )
}
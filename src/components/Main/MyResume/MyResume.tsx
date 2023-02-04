import React, {useEffect, useState} from "react";
import s from './MyResume.module.scss'
import {ResumePart} from "./ResumePart/ResumePart";
import {Statistics} from "./Statistics/Statistics";
import {useSelector} from "react-redux";
import {getResumeState} from "../../../bll/selectors";
import {useAppDispatch} from "../../../utilites/customHooks";
import {superScrollListener} from "../../../utilites/utilitesFunctions";


export const MyResume = () => {

    // to control the component
    let [isStatisticActive, setIsStatisticActive] = useState<boolean>(false);
    let [isExperienceActive, setIsExperienceActive] = useState<boolean>(false);

    // Handle control
    const activatorHandler = () => {
        !isStatisticActive && setIsStatisticActive(true);
        !isExperienceActive && setIsExperienceActive(true);
    };

    const dispatch = useAppDispatch();
    // useEffect for set current page
    useEffect(superScrollListener('myResume', dispatch, activatorHandler, -200), []);

    let {experience, statisticsData} = useSelector(getResumeState);

    // code for styling myResumePageWrapper (incorrect height incorrect height due to position absolute in resumeStage
    // 75px - min-height of resumeStageWrapper
    const maxExperienceLength = Object.values(experience).reduce((acc, el) => el.length > acc ? el.length : acc, 0);
    const resumePartsWrapperHeightStyle = {height: `${(maxExperienceLength + 1) * 75}px`};

    return (
        <div id="myResume" className={s.myResumePageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2>My resume</h2>
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
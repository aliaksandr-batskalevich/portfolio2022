import React from "react";
import s from './MyResume.module.css'
import {ResumePart} from "./ResumePart/ResumePart";
import {Statistics} from "./Statistics/Statistics";

export const MyResume = () => {
    return (
        <div className={s.myResumePageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2>My resume</h2>
                </div>
                <div className={s.resumePartsWrapper}>
                    <ResumePart/>
                    <ResumePart/>
                </div>
                <div className={s.statistic}>
                    <Statistics/>
                </div>
            </div>
        </div>
    )
}
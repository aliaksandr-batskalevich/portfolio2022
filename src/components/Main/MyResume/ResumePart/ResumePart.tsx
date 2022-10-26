import React from "react";
import s from './ResumePart.module.css'
import {ResumeStage} from "./ResumeStage/ResumeStage";

export const ResumePart = () => {
    return (
        <div className={s.resumePartWrapper}>
            <div className={s.titleWrapper}>
                <h3>Experiences</h3>
            </div>
            <div className={s.stageWrapper}>
                <ResumeStage/>
                <ResumeStage/>
                <ResumeStage/>
                <ResumeStage/>
            </div>
        </div>
    )
}
import React from "react";
import s from './AboutMe.module.css';
import {FirstPage} from "./FirstPage/FirstPage";
import {SecondPage} from "./SecondPage/SecondPage";

export const AboutMe = () => {
    return (
        <div id="aboutMe" className={s.aboutMePageWrapper}>
            <div className='container'>
                <FirstPage/>
                <SecondPage/>
            </div>
        </div>
    )
}

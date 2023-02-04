import React, {useEffect, useState} from "react";
import s from './AboutMe.module.css';
import {FirstPage} from "./FirstPage/FirstPage";
import {SecondPage} from "./SecondPage/SecondPage";
import {useAppDispatch} from "../../../utilites/customHooks";
import {superScrollListener} from "../../../utilites/utilitesFunctions";

export const AboutMe = () => {

    // for SkillsComponentControl
    const [isActive, setIsActive] = useState<boolean>(false);
    // handle isActive control
    const setIsActiveHandler = () => {
        !isActive && setIsActive(true);
    };

    const dispatch = useAppDispatch();
    // useEffect for set current page
    useEffect(superScrollListener('aboutMe', dispatch, setIsActiveHandler, -200), []);

       return (
        <div id="aboutMe" className={s.aboutMePageWrapper}>
            <div className='container'>
                <FirstPage isActive={isActive}/>
                <SecondPage/>
            </div>
        </div>
    )
}

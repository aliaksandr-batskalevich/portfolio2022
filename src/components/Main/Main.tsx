import React from "react";
import s from './Main.module.scss'
import {Home} from "./Home/Home";
import {AboutMe} from "./AboutMe/AboutMe";
import {Projects} from "./Projects/Projects";
import {Challenge} from "./Challenge/Challenge";
import {MyResume} from "./MyResume/MyResume";
import {ContactMe} from "./ContactMe/ContactMe";

export const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Challenge/>
            <MyResume/>
            <ContactMe/>
        </div>
    )
}
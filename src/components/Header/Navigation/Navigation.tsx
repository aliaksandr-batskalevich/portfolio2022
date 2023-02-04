import React from "react";
import s from './Navigation.module.scss';
import {PageTitleType} from "../../../bll/definitionsReducer";

type NavigatorPropsType = {
    currentPage: PageTitleType
}

export const Navigation: React.FC<NavigatorPropsType> = ({currentPage}) => {

    let classNameMaker = (elementId: PageTitleType) => currentPage === elementId ? s.activeLink : '';


    return (
        <div className={s.navWrapper}>
            <nav>
                <ul className={s.list}>
                    <li><a className={classNameMaker('home')} href="#home">Home</a></li>
                    <li><a className={classNameMaker('aboutMe')} href="#aboutMe">About me</a></li>
                    <li><a className={classNameMaker('projects')} href="#projects">Projects</a></li>
                    <li><a className={classNameMaker('challenge')} href="#challenge">Challenge</a></li>
                    <li><a className={classNameMaker('myResume')} href="#myResume">My resume</a></li>
                    <li><a className={classNameMaker('contactMe')} href="#contactMe">Contact me</a></li>
                </ul>
            </nav>
        </div>
    )
}
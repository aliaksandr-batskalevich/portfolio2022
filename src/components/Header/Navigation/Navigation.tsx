import React from "react";
import s from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <div className={s.navWrapper}>
            <nav>
                <ul className={s.list}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutMe">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#myResume">My resume</a></li>
                    <li><a href="#contactMe">Contact me</a></li>
                </ul>
            </nav>
        </div>
    )
}
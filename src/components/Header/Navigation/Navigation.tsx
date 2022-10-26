import React from "react";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <div className={s.navWrapper}>
            <nav>
                <ul className={s.list}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">My resume</a></li>
                    <li><a href="#">Contact me</a></li>
                </ul>
            </nav>
        </div>
    )
}
import React from "react";
import s from './AboutMe.module.css';
import {Diagrams} from "./Diagrams/Diagrams";

export const AboutMe = () => {
    return (
        <div className={s.aboutMePageWrapper}>
            <div className='container'>
                <div className={s.firstPage}>
                    <div className={s.titleWrapper}>
                        <h2>About me</h2>
                    </div>
                    <div className={s.textInformation}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae cum deserunt ea
                            eligendi est fugit harum libero, maxime molestiae nostrum officiis sequi sit voluptate.</p>
                    </div>
                    <div className={s.skillsWrapper}>
                        <h3>Skills</h3>
                        <Diagrams/>
                    </div>
                </div>
                <div className={s.secondPage}>
                    <div className={s.postWrapper}>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda blanditiis
                            modi nam quas tempora veritatis?"</p>
                        <p className={s.subscription}>Aliaksandr B.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import s from './Projects.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {



    return (
        <div id="projects" className={s.projectsPageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2>Projects</h2>
                </div>
                <div className={s.projectsFlexWrapper}>
                    <Project/>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import s from './Diagrams.module.css'
import {Diagram} from "./Diagram/Diagram";

export const Diagrams = () => {
    return (
        <div className={s.diagramsWrapper}>
            <Diagram/>
            <Diagram/>
            <Diagram/>
        </div>
    )
}
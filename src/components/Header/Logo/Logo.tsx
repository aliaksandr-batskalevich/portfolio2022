import React from "react";
import s from './Logo.module.scss'
import {useSelector} from "react-redux";
import {getGeneralInfo} from "../../../bll/selectors";

export const Logo = () => {

    let {fullName, position} = useSelector(getGeneralInfo);
    position = position.toUpperCase();

    let fullNameToRender = `${fullName.firstName} ${fullName.lastName}`;

    return (
        <div className={s.logoWrapper}>
            <h1>{position}</h1>
            <span>{fullNameToRender}</span>
        </div>
    )
}
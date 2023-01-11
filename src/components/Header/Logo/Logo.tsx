import React from "react";
import s from './Logo.module.scss'

export const Logo = () => {

    // from BLL
    let status = 'JUNIOR';
    let fullName = {firstName: 'Aliaksandr', lastName: 'Batskalevich'}
    //

    let fullNameToRender = `${fullName.firstName} ${fullName.lastName}`;

    return (
        <div className={s.logoWrapper}>
            <h1>{status}</h1>
            <span>{fullNameToRender}</span>
        </div>
    )
}
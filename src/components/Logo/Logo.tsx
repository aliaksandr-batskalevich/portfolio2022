import React from "react";
import s from './Logo.module.css'
import logo from "../../assets/images/logo.png";

export const Logo = () => {
    return (
        <div className={s.logoWrapper}>
            <img src={logo} alt="logo"/>
        </div>
    )
}
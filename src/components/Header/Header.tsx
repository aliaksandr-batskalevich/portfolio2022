import React from "react";
import s from './Header.module.css'
import {Navigation} from "./Navigation/Navigation";
import {Logo} from "../Logo/Logo";

export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className='container'>
                <div className={s.headerFlexWrapper}>
                    <Logo/>
                    <Navigation/></div>
            </div>
        </div>
    )
}
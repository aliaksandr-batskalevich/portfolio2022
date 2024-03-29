import React from "react";
import s from './Header.module.scss'
import {Navigation} from "./Navigation/Navigation";
import {Logo} from "./Logo/Logo";
import {useSelector} from "react-redux";
import {getCurrentPage, getIsHomeTop} from "../../bll/selectors";

export const Header = () => {

    let isHomeTop = useSelector(getIsHomeTop);
    let currentPage = useSelector(getCurrentPage);

    let headerWrapperClassName = currentPage === 'home' && isHomeTop
        ? `${s.headerWrapper} ${s.headerWrapperOpacity}`
        : s.headerWrapper;

    return (
        <div className={headerWrapperClassName}>
            <div className='container'>
                <div className={s.headerFlexWrapper}>
                    <Logo/>
                    <Navigation currentPage={currentPage}/>
                </div>
            </div>
        </div>
    )
}
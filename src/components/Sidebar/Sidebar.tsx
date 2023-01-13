import React from 'react';
import s from './Sidebar.module.scss';
import {useSelector} from "react-redux";
import {getFollowMeLinksArr} from "../../bll/selectors";

export const Sidebar = () => {

    const followMeLinksArr = useSelector(getFollowMeLinksArr);

        let socialNetworkToRender = followMeLinksArr.map(el => {
        return (
            <li key={el.id}>
                <a target='_blank' href={el.link}><img src={el.logo} alt="socialNetworkLogo"/></a>
            </li>
        )
    });

    return (
        <div className={s.sidebarWrapper}>
            <ul>
                {socialNetworkToRender}
            </ul>
            <h2 className={s.title}>Follow me:</h2>
        </div>
    );
};
import React from 'react';
import s from './Sidebar.module.scss';
import {v1} from "uuid";
import LD from '../../assets/images/linkedInLogo.png';
import GH from '../../assets/images/GitHubLogo.jpg';
import CW from '../../assets/images/codeWarsLogo.png';

export const Sidebar = () => {

    // from BLL
    let socialNetworkLinks = [
        {id: v1(), title: 'LD', logo: LD, link: 'https://www.linkedin.com/in/aliaksandr-batskalevich/'},
        {id: v1(), title: 'GH', logo: GH, link: 'https://github.com/aliaksandr-batskalevich'},
        {id: v1(), title: 'CW', logo: CW, link: 'https://www.codewars.com/users/aliaksandr-batskalevich'},
    ];

    let socialNetworkToRender = socialNetworkLinks.map(el => {
        return (
            <li key={el.id}>
                <a target='_blank' href={el.link}><img src={el.logo} alt="socialNetworkLogo"/></a>
            </li>
        )
    })

    return (
        <div className={s.sidebarWrapper}>
            <ul>
                {socialNetworkToRender}
            </ul>
            <h2 className={s.title}>Follow me:</h2>
        </div>
    );
};
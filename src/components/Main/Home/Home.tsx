import React from "react";
import s from './Home.module.scss';
import '../../../_definitions.scss';
import Writer from "./Writer/Writer";
import {v1} from "uuid";

export const Home = () => {

    // from BLL
    let shortInfo = {
        fullName: {firstName: 'Aliaksandr', lastName: 'Batskalevich'},
        birthday: '16/09/1988',
    };

    const getAgeFromBirthday = (birthday: string) => {
        let [day, month, year] = birthday.split('/');
        let date = new Date();
        let yearNow = +date.getFullYear();
        let monthNow = +date.getMonth();
        let dayNow = +date.getDay();

        // data for test Birthday, will be delete.
        // let monthNow = 9;
        // let dayNow = 16;

        let age = yearNow - (+year);
        if (monthNow < +month || (monthNow === +month && dayNow < +day)) age--;
        let result =  age + ((monthNow === +month && dayNow === +day) ? ' -> Birthday today!' : '');
        return result;
    };
    let briefInformation = [
        {id: v1(), title: 'Status', value: 'Open to work'},
        {id: v1(), title: 'Country', value: 'Belarus'},
        {id: v1(), title: 'Age', value: getAgeFromBirthday(shortInfo.birthday)},
    ];


    let fullNameToRender = `I'm ${shortInfo.fullName.firstName} ${shortInfo.fullName.lastName}`;
    let briefInfToRender = briefInformation.map(el => {

        let isBirthdayClassName = el.value.includes('-> Birthday today!') ? s.birthdayParagraph : '';

        return (
            <li key={el.id} className={s.smallBlock}>
                <h4>{el.title}</h4>
                <p className={isBirthdayClassName}>{el.value}</p>
            </li>
        )
    });

    return (
        <div id='home' className={s.homePageWrapper}>
            <div className='container'>
                <div className={s.shortInf}>
                    <h3>{fullNameToRender}</h3>
                    <Writer/>
                    <ul className={s.smallBlockWrapper}>
                        {briefInfToRender}
                    </ul>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import s from './Home.module.scss';
import Writer from "./Writer/Writer";
import {v1} from "uuid";
import {useSelector} from "react-redux";
import {getGeneralInfo} from "../../../bll/selectors";

export const Home = () => {

    let {birthday, fullName, country, status, mainQualities} = useSelector(getGeneralInfo);

    const getAgeFromBirthday = (birthday: string) => {
        let [day, month, year] = birthday.split('/');
        let date = new Date();
        let yearNow = +date.getFullYear();
        let monthNow = +date.getMonth();
        let dayNow = +date.getDay();


        let age = yearNow - (+year);
        if (monthNow < +month || (monthNow === +month && dayNow < +day)) age--;
        let result =  age + ((monthNow === +month && dayNow === +day) ? ' -> Birthday today!' : '');
        return result;
    };
    let briefInformation = [
        {id: v1(), title: 'Status', value: status},
        {id: v1(), title: 'Country', value: country},
        {id: v1(), title: 'Age', value: getAgeFromBirthday(birthday)},
    ];


    let fullNameToRender = `I'm ${fullName.firstName} ${fullName.lastName}`;
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
                    <Writer mainQualities={mainQualities}/>
                    <ul className={s.smallBlockWrapper}>
                        {briefInfToRender}
                    </ul>
                </div>
            </div>
        </div>
    )
}
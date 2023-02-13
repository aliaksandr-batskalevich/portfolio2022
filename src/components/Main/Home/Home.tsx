import React, {useEffect} from "react";
import s from './Home.module.scss';
import Writer from "./Writer/Writer";
import {v1} from "uuid";
import {useSelector} from "react-redux";
import {getCountry, getGeneralInfo, getMainQualities} from "../../../bll/selectors";
import {useAppDispatch} from "../../../utilites/customHooks";
import {superScrollListener} from "../../../utilites/utilitesFunctions";
import myPhoto1 from '../../../assets/images/meFirstPage.png'

export const Home = () => {

    const dispatch = useAppDispatch();
    // useEffect for set current page
    useEffect(superScrollListener('home', dispatch, undefined, -200), []);

    let {birthday, fullName, status} = useSelector(getGeneralInfo);
    let mainQualities = useSelector(getMainQualities);
    let country = useSelector(getCountry);

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
                <div className={s.myPhoto1}>
                    <img src={myPhoto1} alt=""/>
                </div>
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
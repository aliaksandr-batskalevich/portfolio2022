import React, {useEffect} from "react";
import s from './ContactMe.module.scss';
import {FeedBack} from "./FeedBack/FeedBack";
import {MyContacts} from "./MyContacts/MyContacts";
import {useAppDispatch} from "../../../utilites/customHooks";
import {superScrollListener} from "../../../utilites/utilitesFunctions";

export const ContactMe = () => {

    const dispatch = useAppDispatch();
    // useEffect for set current page
    useEffect(superScrollListener('contactMe', dispatch, undefined, -200), []);


    return (
        <div id="contactMe" className={s.contactMePageWrapper}>
            <div className='container'>
                <h2>Contact Me</h2>
                <FeedBack/>
                <MyContacts/>
            </div>
        </div>
    );
};
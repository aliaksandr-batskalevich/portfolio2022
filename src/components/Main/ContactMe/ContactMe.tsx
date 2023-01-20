import React from "react";
import s from './ContactMe.module.scss';
import {FeedBack} from "./FeedBack/FeedBack";
import {MyContacts} from "./MyContacts/MyContacts";

export const ContactMe = () => {


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
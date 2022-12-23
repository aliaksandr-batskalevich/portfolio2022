import React from "react";
import s from './ContactMe.module.css';

export const ContactMe = () => {
    return (
        <div id="contactMe" className={s.contactMePageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2>Contact Me</h2>
                </div>
            </div>
        </div>
    )
}
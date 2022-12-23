import React from 'react';
import s from "./SecondPage.module.scss";
import {v1} from "uuid";

export const SecondPage = () => {

    // from BLL:
    let citation = {
        id: v1(),
        text: '\"I can do anything, it just takes knowledge and time. Give me time and I will do it.\"',
        subscription: 'Aliaksandr B.',
    }

    return (
        <div className={s.secondPage}>
            <div className={s.postWrapper}>
                <p>{citation.text}</p>
                <p className={s.subscription}>{citation.subscription}</p>
            </div>
        </div>
    );
};

import React from 'react';
import s from "./SecondPage.module.scss";
import {useSelector} from "react-redux";
import {getMyQuote} from "../../../../bll/selectors";


export const SecondPage = () => {

    let myQuote = useSelector(getMyQuote);

    return (
        <div className={s.secondPage}>
            <div className={s.postWrapper}>
                <p>{myQuote.text}</p>
                <p className={s.subscription}>{myQuote.subscription}</p>
            </div>
        </div>
    );
};

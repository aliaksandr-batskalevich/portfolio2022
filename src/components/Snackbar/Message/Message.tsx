import React, {useEffect, useState} from 'react';
import s from './Message.module.scss';
import {textCuter} from "../../../utilites/utilitesFunctions";
import {SnackbarMessageType} from "../../../bll/snackbarReducer";
import {useSelector} from "react-redux";
import {getSnackbarTimingSec} from "../../../bll/selectors";

export type MessagePropsType = SnackbarMessageType & {
    closeMessage: (id: string) => void
}

export const Message: React.FC<MessagePropsType> = ({id, type, text, closeMessage}) => {

    let timingSec = useSelector(getSnackbarTimingSec);

    useEffect(() => {
        let timeOutId = setTimeout(() => {
            closeMessageHandler();
        }, timingSec[type] * 1000)
        return () => {
            clearTimeout(timeOutId);
        }
    }, []);

    const closeMessageHandler = () => {
        closeMessage(id);
    };

    let messageToRender = textCuter(text, 35);

    let title = (type === 'error' ? 'Error' : type === 'warning' ? 'Warning' : 'Info') + ':';
    let classNameOfType = `${s.messageWrapper} ${type === 'error' ? s.error : type === 'warning' ? s.warning : s.info}`;
    
    
    return (
        <div className={classNameOfType}>
            <div className={s.triangle}/>
            <div className={s.textWrapper}>
                <h3 className={s.title}>{title}</h3>
                <p>{messageToRender}</p>
                <div className={s.closeButton} onClick={closeMessageHandler}/>
            </div>
        </div>
    );
};
import React, {useEffect, useState} from 'react';
import s from './Message.module.scss';
import {textCuter} from "../../../utilites/utilitesFunctions";

type StatusType = 'active' | 'notActive';
type MessageType = 'error' | 'info' | 'warning';
export type MessagePropsType = {
    id: string
    type: MessageType
    message: string

    closeMessage: (id: string) => void
}

export const Message: React.FC<MessagePropsType> = ({id, type, message, closeMessage}) => {

    let [status, setStatus] = useState<StatusType>('active');

    // from BLL
    let timingSec = {
        error: 15,
        warning: 10,
        info: 5,
    };

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

    let messageToRender = textCuter(message, 30);

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
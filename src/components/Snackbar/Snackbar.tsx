import React from 'react';
import s from './Snackbar.module.scss';
import {Message} from "./Message/Message";

export const Snackbar = () => {
    return (
        <div className={s.snackbarWrapper}>
            <Message id={'123'} type={'error'} message={'Error message!'} closeMessage={(id: string) => {alert(id)}}/>
            <Message id={'123'} type={'warning'} message={'Warning message!'} closeMessage={(id: string) => {alert(id)}}/>
            <Message id={'123'} type={'info'} message={'Info big message: jdfh dfshsah fdsa!'} closeMessage={(id: string) => {alert(id)}}/>
        </div>
    );
};
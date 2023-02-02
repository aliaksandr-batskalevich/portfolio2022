import React from 'react';
import s from './Snackbar.module.scss';
import {Message} from "./Message/Message";
import {useSelector} from "react-redux";
import {getSnackbarMessages} from "../../bll/selectors";
import {useAppDispatch} from "../../utilites/customHooks";
import {removeSnackbarMessage} from "../../bll/snackbarReducer";

export const Snackbar = () => {
    let snackbarMessages = useSelector(getSnackbarMessages);
    const dispatch = useAppDispatch();
    const removeSnackbarMessageHandler = (id: string) => {
        dispatch(removeSnackbarMessage(id));
    };

    let snackbarMessagesToRender = snackbarMessages.map(m => <Message key={m.id} id={m.id} type={m.type} text={m.text} closeMessage={removeSnackbarMessageHandler}/>);

    return (
        <div className={s.snackbarWrapper}>
            {snackbarMessagesToRender}
        </div>
    );
};
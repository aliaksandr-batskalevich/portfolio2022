import React, {ReactElement} from 'react';
import s from './MyContacts.module.scss';
import {useSelector} from "react-redux";
import {getMyContactsPatternSort} from "../../../../bll/selectors";
import {useAppDispatch} from "../../../../utilites/customHooks";
import {addSnackbarErrorMessage, addSnackbarInfoMessage} from "../../../../bll/snackbarReducer";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const MyContacts = () => {

    const dispatch = useAppDispatch();
    let myContacts = useSelector(getMyContactsPatternSort);
    let myContactsToRender: Array<ReactElement> = [];
    let elementsInColumn = 3;

    // to copy in clipBoard
    const clipBoardCopyHandler = (value: string) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                dispatch(addSnackbarInfoMessage(`Copied! ${value}`))
            })
            .catch(error => {
                dispatch(addSnackbarErrorMessage(error));
            })
    };

    // create JSX for column using variable elementsInColumn for columnForm
    for (let i = 0; i < myContacts.length; i += elementsInColumn) {
        let columnToRender: Array<ReactElement> = []
        for (let j = 0; j < elementsInColumn; j++) {
            myContacts[i + j] && columnToRender.push(
                <div key={i + '' + j} className={s.myContactWrapper}>
                    <div className={s.myContactTitleWrapper}>
                        <h4>{myContacts[i + j].title}:</h4>
                    </div>
                    <div className={s.myContactValueWrapper}>
                        {myContacts[i + j].title === 'Phone Number'
                            ? <a href={`tel:${myContacts[i + j].value}`}>{myContacts[i + j].value}</a>
                            : myContacts[i + j].title === 'Email'
                                ? <a href={`mailto:${myContacts[i + j].value}`}>{myContacts[i + j].value}</a>
                                : <a href={myContacts[i + j].value} target='_blank'>{myContacts[i + j].value}</a>}
                    </div>
                    <div className={s.clipBoardCopy} onClick={() => clipBoardCopyHandler(myContacts[i + j].value)}/>
                </div>
            )
        }
        myContactsToRender.push(<div key={i} className={s.myContactsColumn}>{columnToRender}</div>)
    }

    return (
        <div className={s.myContactsWrapper}>
            {myContactsToRender}
        </div>
    );
};
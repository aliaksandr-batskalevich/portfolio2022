import React from 'react';
import s from './FeedbackPreview.module.scss';
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../../../utilites/customHooks";
import {setClearFeedbackPreview, setFeedbackMode} from "../../../../../bll/definitionsReducer";
import {getFeedbackPreview} from "../../../../../bll/selectors";

export const FeedbackPreview = () => {

    const dispatch = useAppDispatch();
    let feedbackPreview = useSelector(getFeedbackPreview);

    const closeFeedbackPreview = () => {
        dispatch(setFeedbackMode('form'));
        dispatch(setClearFeedbackPreview());
    };

    return (
        <div className={s.feedbackPreviewWrapper}>
            <div className={s.feedbackPreviewContentWrapper}>
                <div className={s.closeButton} onClick={closeFeedbackPreview}/>
                <span>{feedbackPreview}</span>
            </div>

        </div>
    );
};
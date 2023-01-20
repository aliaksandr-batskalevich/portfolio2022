import React from 'react';
import s from './FeedbackPreview.module.scss';
import {useSelector} from "react-redux";
import {getFeedbackPreviewData} from "../../../../../bll/selectors";
import {useAppDispatch} from "../../../../../utilites/customHooks";
import {setFeedbackMode} from "../../../../../bll/definitionsReducer";
import {setClearFeedbackPreview} from "../../../../../bll/projectsReducer";

export const FeedbackPreview = () => {

    const dispatch = useAppDispatch();
    let feedbackPreviewData = useSelector(getFeedbackPreviewData);

    const closeFeedbackPreview = () => {
        dispatch(setFeedbackMode('form'));
        dispatch(setClearFeedbackPreview());
    };

    return (
        <div className={s.feedbackPreviewWrapper}>
            {JSON.stringify(feedbackPreviewData)}
            <div className={s.closeButtonWrapper}>
                <button className={s.closeButton} onClick={closeFeedbackPreview}>Close</button>
            </div>
        </div>
    );
};
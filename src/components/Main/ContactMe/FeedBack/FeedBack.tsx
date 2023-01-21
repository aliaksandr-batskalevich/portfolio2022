import React from 'react';
import s from './FeedBack.module.scss';
import {useSelector} from "react-redux";
import {getFeedbackMode} from "../../../../bll/selectors";
import {FeedbackForm} from "./FeedbackForm/FeedbackForm";
import {FeedbackPreview} from "./FeedbackPreview/FeedbackPreview";


export const FeedBack = () => {

    let feedbackMode = useSelector(getFeedbackMode);

    let feedbackStyleOnPreview = feedbackMode === "preview"
        ? {
            filter: 'blur(10px)',
            pointerEvents: 'none' as const,
            transitionDuration: '1s',
        }
        : undefined;

    return (
        <div className={s.feedbackWrapper}>
            <div style={feedbackStyleOnPreview}>
                <h3>Feedback</h3>
                <FeedbackForm/>
            </div>
            {feedbackMode === 'preview' && <FeedbackPreview/>}
        </div>
    );
};

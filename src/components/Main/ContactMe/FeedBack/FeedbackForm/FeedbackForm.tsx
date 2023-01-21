import React, {useEffect} from 'react';
import emailjs from '@emailjs/browser';
import s from "./FeedbackForm.module.scss";
import {ProjectsForm} from "../ProjectsForm/ProjectsForm";
import {useSelector} from "react-redux";
import {getEmailJSKeys, getMyProjectsInRatingType} from "../../../../../bll/selectors";
import {useFormik} from "formik";
import {useAppDispatch} from "../../../../../utilites/customHooks";
import {setFeedbackMode, setFeedbackPreview} from "../../../../../bll/definitionsReducer";
import {feedbackDataConverter} from "../../../../../utilites/utilitesFunctions";
import {clearCurrentRatingsAndComments} from "../../../../../bll/projectsReducer";

export type FeedbackDataType = {
    name: string
    email: string
    text: string
    rating: Record<string, string>
    comments: Record<string, string>
};

export const FeedbackForm = () => {

    const dispatch = useAppDispatch();
    let myProjectsInRatingType = useSelector(getMyProjectsInRatingType);
    let {TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY} = useSelector(getEmailJSKeys);

    // async code. Using emailJS sender.
    const sendFeedbackByEmailJS = (values: FeedbackDataType) => {

        let textForEmailJS = feedbackDataConverter("emailJS", values);

        emailjs.send(SERVICE_ID, TEMPLATE_ID, {...values, text: textForEmailJS}, PUBLIC_KEY)
            .then(response => {
                alert(JSON.stringify(response));
            })
            .catch(error => {
                alert(JSON.stringify(error));
            });
    };

    // FORMIK
    let ratingForFormik = {};
    let projectsComments = {};
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: '',
            rating: ratingForFormik,
            comments: projectsComments,
        } as FeedbackDataType,
        validate(values) {

        },
        onSubmit(values) {
            sendFeedbackByEmailJS(values);
            resetForm();
        },
    });

    // eseEffect to update Rating&CommentsData in FORMIK
    useEffect(() => {
        formik.values.rating = {};
        formik.values.comments = {};
        myProjectsInRatingType.forEach(pr => {
            if (pr.rating.currentRating !== null) {
                formik.values.rating[pr.title] = String(pr.rating.currentRating);
                formik.values.comments[pr.title] = pr.comments;
            }
        });
    }, [myProjectsInRatingType]);

    const setPreviewHandler = () => {
        let feedbackPreviewInString = feedbackDataConverter("preview", formik.values);
        dispatch(setFeedbackPreview(feedbackPreviewInString));
        dispatch(setFeedbackMode('preview'));
    };
    const resetForm = () => {
        formik.resetForm();
        dispatch(clearCurrentRatingsAndComments());
    };

    return (
        <div className={s.feedbackFormWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.writersAddressWrapper}>
                    <div className={s.writersFormWrapper}>
                        <label htmlFor="writersName">Name: </label>
                        <input
                            type='text'
                            id='writersName'
                            name='name'
                            placeholder={'Your name'}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className={s.writersFormWrapper}>
                        <label htmlFor="writersEmail">Email:</label>
                        <input type='email'
                               id='writersEmail'
                               name='email'
                               placeholder={'Your email address'}
                               value={formik.values.email}
                               onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div className={s.writersTextWrapper}>
                            <textarea
                                id='writersTextarea'
                                name='text'
                                placeholder={'Feedback'}
                                value={formik.values.text}
                                onChange={formik.handleChange}
                            />
                </div>
                <ProjectsForm/>
                <div className={s.buttonsWrapper}>
                    <button className={s.previewButton} type={'button'} onClick={setPreviewHandler}>Preview</button>
                    <button className={s.submitButton} type='submit'>Submit</button>
                    <button className={s.submitButton} type='reset' onClick={resetForm}>Clear</button>
                </div>
            </form>
        </div>
    );
};


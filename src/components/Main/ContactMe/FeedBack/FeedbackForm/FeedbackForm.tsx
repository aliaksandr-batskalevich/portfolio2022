import React, {useEffect} from 'react';
import s from "./FeedbackForm.module.scss";
import {ProjectsForm} from "../ProjectsForm/ProjectsForm";
import {useSelector} from "react-redux";
import {getMyProjectsInRatingType} from "../../../../../bll/selectors";
import {useFormik} from "formik";
import {FeedbackPreviewType, setFeedbackPreview} from "../../../../../bll/projectsReducer";
import {useAppDispatch} from "../../../../../utilites/customHooks";
import {setFeedbackMode} from "../../../../../bll/definitionsReducer";

export const FeedbackForm = () => {

    const dispatch = useAppDispatch();
    let myProjectsInRatingType = useSelector(getMyProjectsInRatingType);

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
        } as FeedbackPreviewType,
        onSubmit(values) {
            alert(JSON.stringify(values));
        }
    });

    // function for update Rating&CommentsData in FORMIK
    const ratingFormikUpdateHandler = () => {
        formik.values.rating = {};
        formik.values.comments = {};
        myProjectsInRatingType.forEach(pr => {
            if (pr.rating.currentRating !== null) {
                formik.values.rating[pr.title] = String(pr.rating.currentRating);
                formik.values.comments[pr.title] = pr.comments;
            }
        });
    };

    // eseEffect to update Rating&CommentsData in FORMIK
    useEffect(() => {
        ratingFormikUpdateHandler();
    }, [myProjectsInRatingType]);

    const previewHandler = () => {
        dispatch(setFeedbackPreview(formik.values));
        dispatch(setFeedbackMode('preview'));
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
                <div className={s.separator}/>
                <div className={s.submitButtonWrapper}>
                    <button className={s.submitButton} type='submit'>Submit</button>
                </div>
            </form>
            <div className={s.previewButtonWrapper}>
                <button className={s.previewButton} onClick={previewHandler}>Preview</button>
            </div>
        </div>
    );
};
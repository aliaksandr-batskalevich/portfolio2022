import React, {useEffect} from 'react';
import emailjs from '@emailjs/browser';
import s from "./FeedbackForm.module.scss";
import {ProjectsForm} from "../ProjectsForm/ProjectsForm";
import {useSelector} from "react-redux";
import {getEmailJSKeys, getMyProjectsInRatingType} from "../../../../../bll/selectors";
import {useFormik} from "formik";
import {useAppDispatch, useLocalStorage} from "../../../../../utilites/customHooks";
import {setFeedbackMode, setFeedbackPreview} from "../../../../../bll/definitionsReducer";
import {feedbackDataConverter} from "../../../../../utilites/utilitesFunctions";
import {clearCurrentRatingsAndComments, setCurrentRatingsAndCommentsFromLS} from "../../../../../bll/projectsReducer";

export type FeedbackDataType = {
    name: string
    email: string
    text: string
    rating: Record<string, string>
    comments: Record<string, string>
};
export type FeedbackInLocalStorageDataType = Omit<FeedbackDataType, 'rating' | 'comments'>
type ProjectsRatingAndCommentsLSType = {rating: Record<string, string>, comments: Record<string, string>};

export const FeedbackForm = () => {

    const dispatch = useAppDispatch();
    let myProjectsInRatingType = useSelector(getMyProjectsInRatingType);
    let {TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY} = useSelector(getEmailJSKeys);

    // useEffect for update projects currentRating and comments from local storage
    useEffect(() => {
        let projectsRatingAndCommentsFromLS = localStorage.getItem('projects-rating-and-comments');
        if (projectsRatingAndCommentsFromLS) {
            let {rating, comments} = JSON.parse(projectsRatingAndCommentsFromLS) as ProjectsRatingAndCommentsLSType;
            dispatch(setCurrentRatingsAndCommentsFromLS(rating, comments));
        }
    }, []);

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

    // code for save formikData (name, email, text) in LocalStorage
    // - create custom hook useLocalStorage
    let freshFormikValues = {name: '', email: '', text: ''} as FeedbackInLocalStorageDataType;
    const [initialFormikValues, setInitialFormikValues] = useLocalStorage('feedback-local-storage-data', freshFormikValues);


    let ratingForFormik = {};
    let projectsComments = {};
    let formik = useFormik({
        initialValues: {
            ...initialFormikValues,
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


    // useEffect for update formik data (name, email, text) from local storage
    // does not contain project data, they are saved separately
    useEffect(() => {
        let {name, email, text} = formik.values;
        setInitialFormikValues({name, email, text} as FeedbackInLocalStorageDataType);
    }, [setInitialFormikValues, formik.values.name, formik.values.email, formik.values.text]);

    // useEffect to update Rating&CommentsData in FORMIK and save data in local storage
    useEffect(() => {
        let rating = {} as Record<string, string>;
        let comments = {} as Record<string, string>;
        myProjectsInRatingType.forEach(pr => {
            if (pr.rating.currentRating !== null) {
                rating[pr.title] = String(pr.rating.currentRating);
                comments[pr.title] = pr.comments;
            }
        });

        // update data in formik
        formik.setValues({...formik.values, rating, comments});

        // save data in local storage
        let projectsRatingAndCommentsToLS: ProjectsRatingAndCommentsLSType = {rating, comments};
        localStorage.setItem('projects-rating-and-comments', JSON.stringify(projectsRatingAndCommentsToLS));

    }, [myProjectsInRatingType]);


    const setPreviewHandler = () => {
        let feedbackPreviewInString = feedbackDataConverter("preview", formik.values);
        dispatch(setFeedbackPreview(feedbackPreviewInString));
        dispatch(setFeedbackMode('preview'));
    };
    const resetForm = () => {
        setInitialFormikValues(freshFormikValues);
        // formik.resetForm() don't work - initialFormikValues comes from localStorage
        // formik.resetForm();
        // for reset using setValues - it's Ok)
        formik.setValues({...formik.values, ...freshFormikValues});
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


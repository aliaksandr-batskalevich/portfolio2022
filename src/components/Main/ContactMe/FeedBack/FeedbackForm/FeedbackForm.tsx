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
import {
    addSnackbarErrorMessage,
    addSnackbarInfoMessage,
    addSnackbarWarningMessage
} from "../../../../../bll/snackbarReducer";

export type FeedbackDataType = {
    name: string
    email: string
    text: string
    rating: Record<string, string> // title & rating
    comments: Record<string, string> // title & text
};
export type FeedbackInLocalStorageDataType = Omit<FeedbackDataType, 'rating' | 'comments'>
type ProjectsRatingAndCommentsLSType = { rating: Record<string, string>, comments: Record<string, string> };

export const FeedbackForm = () => {

    const dispatch = useAppDispatch();
    let myProjectsInRating = useSelector(getMyProjectsInRatingType);
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

        return emailjs.send(SERVICE_ID, TEMPLATE_ID, {...values, text: textForEmailJS}, PUBLIC_KEY);
    };


    // FORMIK

    // code for save formikData (name, email, text) in LocalStorage
    // - create custom hook useLocalStorage
    let freshFormikValues = {name: '', email: '', text: ''} as FeedbackInLocalStorageDataType;

    const [initialFormikValues, setInitialFormikValues] = useLocalStorage('feedback-local-storage-data', freshFormikValues);

    // formValidator
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = (values: FeedbackDataType) => {
        let errors = {} as Record<string, string>;
        // validate for nameField
        if (!values.name) {
            errors.name = 'Required field!';
        }
        // validate for emailField
        if (!values.email) {
            errors.email = 'Required field!';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Incorrect email!';
        }
        // validate for textField
        if (!values.text) {
            errors.text = 'Required field!';
        }
        // validate for rating
        if (Object.values(values.rating).some(r => r === '0')) {
            errors.rating = 'You need to evaluate the selected project.'
        }
        return errors;
    };

    // formikCreator
    let ratingForFormik = {};
    let projectsComments = {};
    let formik = useFormik({
        initialValues: {
            ...initialFormikValues,
            rating: ratingForFormik,
            comments: projectsComments,
        } as FeedbackDataType,
        validate,
        onSubmit(values) {
            sendFeedbackByEmailJS(values)
                .then(response => {
                    dispatch(addSnackbarInfoMessage('Your feedback has been sent.'));
                    resetForm(); // not work!!! Must be fix!!!
                })
                .catch(error => {
                    // no errorMessage from library
                    dispatch(addSnackbarErrorMessage('Some error...'));
                })
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
        myProjectsInRating.forEach(pr => {
            if (pr.rating.currentRating !== null) {
                rating[pr.title] = String(pr.rating.currentRating);
                comments[pr.title] = pr.comments;
            }
        });

        // update data in formik
        // formik.setValues({...formik.values, rating, comments});
        formik.values.rating = rating;
        formik.values.comments = comments;

        // save data in local storage
        let projectsRatingAndCommentsToLS: ProjectsRatingAndCommentsLSType = {rating, comments};
        localStorage.setItem('projects-rating-and-comments', JSON.stringify(projectsRatingAndCommentsToLS));

    }, [myProjectsInRating]);


    const setPreviewHandler = () => {
        let feedbackPreviewInString = feedbackDataConverter("preview", formik.values);
        dispatch(setFeedbackPreview(feedbackPreviewInString));
        dispatch(setFeedbackMode('preview'));
    };
    const resetForm = () => {
        dispatch(clearCurrentRatingsAndComments());
        formik.resetForm({values: {name: '', email: '', text: '', rating: {}, comments: {}}});
    };

    // data for show feedback on validate in UI
    // disabled buttons
    const disabledButtonStyle = {
        opacity: '.5',
        pointerEvents: 'none' as const
    };
    const disabledPreviewAndSubmitButtonStyle = Object.keys(formik.errors).length
    || !formik.values.name
    || !formik.values.email
    || !formik.values.text
        ? disabledButtonStyle
        : undefined;
    const disabledClearButtonStyle = !Object.keys(formik.values.rating).length
    && !formik.values.name
    && !formik.values.email
    && !formik.values.text
        ? disabledButtonStyle
        : undefined;
    // red fieldBorder
    const errorFieldStyle = {
        border: 'red solid 1px',
    };
    const errorNameFieldStyle = formik.touched.name && formik.errors.name ? errorFieldStyle : undefined;
    const errorEmailFieldStyle = formik.touched.email && formik.errors.email ? errorFieldStyle : undefined;
    const errorTextFieldStyle = formik.touched.text && formik.errors.text ? errorFieldStyle : undefined;
    // create messages in snackbar
    useEffect(() => {
        formik.touched.name && formik.errors.name && dispatch(addSnackbarWarningMessage(formik.errors.name));
    }, [formik.errors.name, formik.touched.name]);
    useEffect(() => {
        formik.touched.email && formik.errors.email && dispatch(addSnackbarWarningMessage(formik.errors.email));
    }, [formik.errors.email, formik.touched.email]);
    useEffect(() => {
        formik.touched.text && formik.errors.text && dispatch(addSnackbarWarningMessage(formik.errors.text));
    }, [formik.errors.text, formik.touched.text]);

    return (
        <div className={s.feedbackFormWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.writersAddressWrapper}>
                    <div className={s.writersFormWrapper}>
                        <label htmlFor="writersName">Name: </label>
                        <input
                            style={errorNameFieldStyle}
                            type='text'
                            id='writersName'
                            placeholder={'Your name'}
                            {...formik.getFieldProps('name')}
                        />
                    </div>
                    <div className={s.writersFormWrapper}>
                        <label htmlFor="writersEmail">Email:</label>
                        <input
                            style={errorEmailFieldStyle}
                            type='email'
                            id='writersEmail'
                            placeholder={'Your email address'}
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                </div>
                <div className={s.writersTextWrapper}>
                            <textarea
                                style={errorTextFieldStyle}
                                id='writersTextarea'
                                placeholder={'Feedback'}
                                {...formik.getFieldProps('text')}
                            />
                </div>
                <ProjectsForm/>
                <div className={s.buttonsWrapper}>
                    <button
                        className={s.previewButton}
                        style={disabledPreviewAndSubmitButtonStyle}
                        type={'button'}
                        onClick={setPreviewHandler}
                    >
                        Preview
                    </button>

                    <button
                        className={s.submitButton}
                        style={disabledPreviewAndSubmitButtonStyle}
                        type='submit'
                    >
                        Submit
                    </button>

                    <button
                        className={s.submitButton}
                        style={disabledClearButtonStyle}
                        type='reset'
                        onClick={resetForm}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};


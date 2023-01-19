import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ContactMe.module.scss';
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {getCurrentProjectRating, getMyProjects} from "../../../bll/selectors";

type RatingProjectType = {
    id: string
    title: string
    rating: null | number
}

export const ContactMe = () => {

    let defaultOption = 'select the project';

    let projectsFromState = useSelector(getMyProjects);
    let preRating = useSelector(getCurrentProjectRating); // type - [id: string]: number
    let projects: Array<RatingProjectType> = projectsFromState.map(pr => ({id: pr.id, title: pr.title, rating: preRating[pr.id] ? preRating[pr.id] : null}));


    let [ratingProjects, setRatingProjects] = useState<Array<RatingProjectType>>([]);
    let [projectSelector, setProjectSelector] = useState<string>(defaultOption);

    let projectsForSelect = projects
        .filter(pr => !ratingProjects.some(rp => rp.id === pr.id))
        .map(pr => pr.title)
        .sort();


    useEffect(() => {
        let ratingProjectsInit = projects.filter(pr => pr.rating);
        setRatingProjects(ratingProjectsInit);
    }, [preRating]);

    const changeProjectSelectorHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setProjectSelector(event.currentTarget.value);
    };
    const setRatingProjectsHandler = () => {
        let newProjectToRating = projects.find(pr => pr.title === projectSelector);
        newProjectToRating && setRatingProjects([...ratingProjects, newProjectToRating]);
        setProjectSelector(defaultOption);
    };






    let ratingForFormik = {} as Record<string, null | number>;
    for (const project of projects) {
        ratingForFormik[project.title] = project.rating
    }

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: '',
            rating: ratingForFormik,
        },
        onSubmit(values) {
            alert(JSON.stringify(values));
        }
    });








    let optionsToRender = projectsForSelect.map((pr, index) => <option key={index} value={pr}>{pr}</option>);
    let isAddProjectToRatingDisabled = projectSelector === defaultOption;

    return (
        <div id="contactMe" className={s.contactMePageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2>Contact Me</h2>
                </div>
                <div className={s.feedbackWrapper}>
                    <h3>Feedback</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={s.writersAddressWrapper}>
                            <div className={s.writersFormWrapper}>
                                <label htmlFor="writersName">Name: </label>
                                <input
                                    type='text'
                                    id='writersName'
                                    name='name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </div>
                            <div className={s.writersFormWrapper}>
                                <label htmlFor="writersEmail">Email:</label>
                                <input type='email'
                                       id='writersEmail'
                                       name='email'
                                       onChange={formik.handleChange}
                                       value={formik.values.email}
                                />
                            </div>
                        </div>
                        <div className={s.writersTextWrapper}>
                            <textarea
                                id='writersTextarea'
                                name='text'
                                onChange={formik.handleChange}
                                value={formik.values.text}
                            />
                        </div>
                        <div className={s.projectsMarksWrapper}>
                            <div className={s.projectsMarksInnerWrapper}>
                                {ratingProjects.length}
                            </div>
                            <div className={s.addProjectRatingWrapper}>
                                <label htmlFor="projectSelector">Add project to rating:</label>
                                <select
                                    id="projectSelector"
                                    name="projectSelector"
                                    value={projectSelector}
                                    onChange={changeProjectSelectorHandler}
                                    disabled={!optionsToRender.length}
                                >
                                    <option value={defaultOption}>{defaultOption}</option>
                                    {optionsToRender}
                                </select>
                                <button
                                    className={s.addProjectRatingButton}
                                    type='button'
                                    onClick={setRatingProjectsHandler}
                                    disabled={isAddProjectToRatingDisabled}
                                >
                                    add
                                </button>
                            </div>
                        </div>
                        <div className={s.separator}/>
                        <div className={s.submitButtonWrapper}>
                            <button className={s.submitButton} type='submit'>Submit</button>
                        </div>
                    </form>

                </div>


            </div>
        </div>
    )
}
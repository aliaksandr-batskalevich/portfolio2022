import React from 'react';
import s from './ProjectsForm.module.scss';
import {ProjectForm} from "./ProjectForm/ProjectForm";
import {changeCurrentProjectRating, RatingType, removeCurrentProjectRating} from "../../../../../bll/projectsReducer";
import {AddProject} from "./AddProject/AddProject";
import {useAppDispatch} from "../../../../../utilites/customHooks";
import {useSelector} from "react-redux";
import {getMyProjectsInRatingType, getProjectsToRatingDataSort} from "../../../../../bll/selectors";


type ProjectsFormPropsType = {

}

export const ProjectsForm: React.FC<ProjectsFormPropsType> = () => {

    const dispatch = useAppDispatch();

    let projects = useSelector(getMyProjectsInRatingType);
    let projectsToRating = useSelector(getProjectsToRatingDataSort);

    const removeProjectToRatingHandler = (id: string) => {
        dispatch(removeCurrentProjectRating(id));
    };
    const changeCurrentProjectRatingHandler = (id: string, currentRating: RatingType) => {
        dispatch(changeCurrentProjectRating(id, currentRating));
    };



    let projectsToRatingToRender = projectsToRating.map(pr => <ProjectForm
        key={pr.id}
        projectToRating={pr}
        changeCurrentProjectRating={changeCurrentProjectRatingHandler}
        removeProjectToRating={removeProjectToRatingHandler}
    />);

    return (
        <div className={s.projectsFormWrapper}>

            {projectsToRatingToRender}

            <AddProject
                projects={projects}
            />
        </div>
    );
};
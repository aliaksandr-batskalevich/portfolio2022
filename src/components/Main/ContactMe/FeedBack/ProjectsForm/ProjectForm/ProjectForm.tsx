import React, {ChangeEvent} from 'react';
import s from './ProjectForm.module.scss';
import {Rating} from "../../../../../commons/Rating/Rating";
import {changeProjectComments, ProjectToRatingType, RatingType} from "../../../../../../bll/projectsReducer";
import {useAppDispatch} from "../../../../../../utilites/customHooks";

type ProjectFormPropsType = {
    projectToRating: ProjectToRatingType
    changeCurrentProjectRating: (id: string, currentRating: RatingType) => void
    removeProjectToRating: (id: string) => void
}

export const ProjectForm: React.FC<ProjectFormPropsType> = ({projectToRating, changeCurrentProjectRating, removeProjectToRating}) => {

    const dispatch = useAppDispatch();

    const changeCurrentProjectRatingHandler = (currentRating: RatingType) => {
        changeCurrentProjectRating(projectToRating.id, currentRating);
    };
    const removeProjectToRatingHandler = () => {
        removeProjectToRating(projectToRating.id);
    };

    const onChangeCommentHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeProjectComments(projectToRating.id, event.currentTarget.value));
    };

    return (
        <div className={s.projectFormWrapper}>
            <div className={s.removeProjectButton} onClick={removeProjectToRatingHandler}/>
            <h5>{projectToRating.title}</h5>
            <div className={s.ratingWrapper}>
                <Rating
                    isForm={true}
                    name={projectToRating.title}
                    averageRating={projectToRating.rating.averageRating}
                    currentRating={projectToRating.rating.currentRating}
                    changeCurrentRating={changeCurrentProjectRatingHandler}
                />
            </div>
            <div className={s.commentWrapper}>
                <textarea
                    rows={2}
                    id={projectToRating.title}
                    name={projectToRating.title}
                    placeholder='Some comment...'
                    value={projectToRating.comments}
                    onChange={onChangeCommentHandler}
                />
            </div>

        </div>
    );
};
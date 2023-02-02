import React, {ChangeEvent, useState} from 'react';
import s from './AddProject.module.scss';
import {ProjectToRatingType, setProjectToFormRating} from "../../../../../../bll/projectsReducer";
import {useAppDispatch} from "../../../../../../utilites/customHooks";
import {useSelector} from "react-redux";
import {getProjectsTitlesForRatingSelectSort} from "../../../../../../bll/selectors";
import {addSnackbarInfoMessage} from "../../../../../../bll/snackbarReducer";

type AddProjectPropsType = {
    projects: Array<ProjectToRatingType>
}

export const AddProject: React.FC<AddProjectPropsType> = ({projects}) => {

    const dispatch = useAppDispatch();
    let projectsForSelect = useSelector(getProjectsTitlesForRatingSelectSort);

    let defaultOption = 'select the project';

    let [projectSelector, setProjectSelector] = useState<string>(defaultOption);

    const changeProjectSelectorHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setProjectSelector(event.currentTarget.value);
    };

    const addProjectToRatingHandler = () => {
        let newProjectToFormRating = projects.find(pr => pr.title === projectSelector);

        newProjectToFormRating && dispatch(setProjectToFormRating(newProjectToFormRating.id));
        setProjectSelector(defaultOption);
        dispatch(addSnackbarInfoMessage('Set rating, please!'));
    };

    let optionsToRender = projectsForSelect.map((pr, index) => <option key={index} value={pr}>{pr}</option>);
    let isAddProjectToRatingDisabled = projectSelector === defaultOption;

    return (
        <div className={s.addProjectWrapper}>
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
                onClick={addProjectToRatingHandler}
                disabled={isAddProjectToRatingDisabled}
            />
        </div>
    );
};
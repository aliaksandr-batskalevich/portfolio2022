import React, {useState} from "react";
import s from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Filter} from "./Filter/Filter";
import {useSelector} from "react-redux";
import {
    getCurrentProjectFilter,
    getToolsFilteredProjects,
    getMyProjects, getTimeToProjectsColorEffectSec
} from "../../../bll/selectors";
import {ProjectFilterType, setCurrentProjectFilter} from "../../../bll/definitionsReducer";
import {useAppDispatch} from "../../../utilites/customHooks";
import {changeCurrentProjectRating, RatingType, setProjectToFormRating} from "../../../bll/projectsReducer";
import {addSnackbarInfoMessage} from "../../../bll/snackbarReducer";


export const Projects = () => {

    let projects = useSelector(getMyProjects);
    let currentProjectFilter = useSelector(getCurrentProjectFilter);
    let filteredProjects = useSelector(getToolsFilteredProjects);
    let timeToProjectsColorEffectSec = useSelector(getTimeToProjectsColorEffectSec);

    const dispatch = useAppDispatch();

    const setCurrentProjectFilterHandler = (currentProjectFilter: ProjectFilterType) => {
        dispatch(setCurrentProjectFilter(currentProjectFilter))
    };
    const setCurrentRatingStateHandler = (id: string, currentRating: RatingType) => {
        dispatch(changeCurrentProjectRating(id, currentRating));
        dispatch(addSnackbarInfoMessage('Your score has been accepted!'));
    };


    // code for colorControl of Component
    let [isColorActive, setIsColorActive] = useState<boolean>(false);
    // handle mode
    const setIsActiveHandler = () => {
        setIsColorActive(true);
    };


    // state for eventPointer control.
    const [projectState, setProjectState] = useState<null | string>(null);
    const setProjectStateHandler = (state: null | string) => {
        setProjectState(state);
    };


    let projectsToRender = filteredProjects.map(pr => {

            return <Project
                key={pr.id}
                projectState={projectState}
                project={pr}
                isColorActive={isColorActive}
                timeToRenderSec={timeToProjectsColorEffectSec}

                setProjectState={setProjectStateHandler}
                setCurrentRating={setCurrentRatingStateHandler}
            />
        });

    return (
        <div id="projects" className={s.projectsPageWrapper}>
            <div className='container'>
                <div className={s.headWrapper}>
                    <div className={s.titleWrapper}>
                        <h2 onClick={setIsActiveHandler}>Projects</h2>
                    </div>
                    <Filter
                        projects={projects}
                        currentProjectFilter={currentProjectFilter}
                        setCurrentProjectFilter={setCurrentProjectFilterHandler}
                    /></div>
                <div className={s.projectsOutFlexWrapper}>
                    <div className={s.projectsFlexWrapper}>
                        {projectsToRender}
                    </div>
                </div>
            </div>
        </div>
    )
}
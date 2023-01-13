import React from 'react';
import s from './Filter.module.scss';
import {FilterButton} from "./FilterButton/FilterButton";
import {ProjectType} from "../../../../bll/projectsReducer";
import {ProjectFilterType} from "../../../../bll/definitionsReducer";

type FilterPropsType = {
    projects: Array<ProjectType>
    currentProjectFilter: ProjectFilterType
    setCurrentProjectFilter: (currentFilter: ProjectFilterType) => void
}

export const Filter: React.FC<FilterPropsType> = ({projects, currentProjectFilter, setCurrentProjectFilter}) => {

    let projectFilters = projects
        .reduce((acc, el) => [...acc, ...el.tools], ['ALL'])
        .filter((el, index, array) => index === array.indexOf(el))
        .sort();

    let filtersButtonsToRender = projectFilters.map((el, index) => {
        let projectsCount = el === 'ALL'
            ? projects.length
            : projects.filter(p => p.tools.some(t => t === el)).length;

        return <FilterButton
            key={index}
            currentProjectFilter={currentProjectFilter}
            title={el as ProjectFilterType}
            projectsCount={projectsCount}
            setCurrentProjectFilter={setCurrentProjectFilter}
        />
    })

    return (
        <div className={s.filterWrapper}>
            {filtersButtonsToRender}
        </div>
    );
};
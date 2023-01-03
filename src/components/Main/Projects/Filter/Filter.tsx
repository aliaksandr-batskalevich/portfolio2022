import React from 'react';
import s from './Filter.module.scss';
import {FilterButton} from "./FilterButton/FilterButton";
import {FilterType, ProjectType} from "../Projects";
import {array} from "prop-types";

type FilterPropsType = {
    projects: Array<ProjectType>
    currentFilter: FilterType
    setFilter: (filter: FilterType) => void
}

export const Filter: React.FC<FilterPropsType> = ({projects, currentFilter, setFilter}) => {

    let filters = projects
        .reduce((acc, el) => [...acc, ...el.tools], ['ALL'])
        .filter((el, index, array) => index === array.indexOf(el))
        .sort();

    let filtersButtonsToRender = filters.map((el, index) => {
        let projectsCount = el === 'ALL'
            ? projects.length
            : projects.filter(p => p.tools.some(t => t === el)).length;

        return <FilterButton
            key={index}
            currentFilter={currentFilter}
            title={el as FilterType}
            projectsCount={projectsCount}
            setFilter={setFilter}
        />
    })

    return (
        <div className={s.filterWrapper}>
            {filtersButtonsToRender}
        </div>
    );
};
import React from 'react';
import s from './FilterButton.module.scss';
import {ProjectFilterType} from "../../../../../bll/definitionsReducer";

type FilterButtonPropsType = {
    currentProjectFilter: ProjectFilterType
    title: ProjectFilterType
    projectsCount: number

    setCurrentProjectFilter: (filter: ProjectFilterType) => void
}

export const FilterButton: React.FC<FilterButtonPropsType> = ({currentProjectFilter, title, projectsCount, setCurrentProjectFilter}) => {

    const setFilterHandler = () => {
        setCurrentProjectFilter(title);
    };

    const activeButtonStyle = currentProjectFilter === title
        ? {backgroundColor: 'white', color: 'black'}
        : undefined;

    return (
        <div
            className={s.filterButtonWrapper}
            style={activeButtonStyle}
            onClick={setFilterHandler}
        >
            {`${title} (${projectsCount})`}
        </div>
    );
};
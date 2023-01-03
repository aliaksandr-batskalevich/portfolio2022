import React from 'react';
import s from './FilterButton.module.scss';
import {FilterType} from "../../Projects";

type FilterButtonPropsType = {
    currentFilter: FilterType
    title: FilterType
    projectsCount: number

    setFilter: (filter: FilterType) => void
}

export const FilterButton: React.FC<FilterButtonPropsType> = ({currentFilter, title, projectsCount, setFilter}) => {

    const setFilterHandler = () => {
        setFilter(title);
    };

    const activeButtonStyle = currentFilter === title
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
import React from "react";
import s from './Statistics.module.css';
import {StatisticsPart} from "./StatisticsPart/StatisticsPart";

export const Statistics = () => {
    return (
        <div className={s.statisticsWrapper}>
            <StatisticsPart/>
            <StatisticsPart/>
            <StatisticsPart/>
            <StatisticsPart/>
        </div>
    )
}
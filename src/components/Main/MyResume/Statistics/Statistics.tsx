import React from "react";
import s from './Statistics.module.scss';
import {StatisticPart} from "./StatisticsPart/StatisticPart";
import {StatisticType} from "../../../../bll/resumeReduucer";

type StatisticsPropsType = {
    isActive: boolean
    statisticsData: Array<StatisticType>
    timeToRender: number
}

export const Statistics: React.FC<StatisticsPropsType> = ({isActive, statisticsData, timeToRender}) => {

    let statisticsToRender = statisticsData.map(el => <StatisticPart key={el.id} isActive={isActive} title={el.title} value={el.value} timeToRender={timeToRender}/>);

    return (
        <div className={s.statisticsWrapper}>
            {statisticsToRender}
        </div>
    );
};
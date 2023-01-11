import React, {useEffect, useState} from "react";
import s from './StatisticPart.module.scss';

type StatisticPartPropsType = {
    isActive: boolean
    title: string
    value: number
    timeToRender: number
}

export const StatisticPart: React.FC<StatisticPartPropsType> = ({isActive, title, value, timeToRender}) => {

    let iterNum = String(value).split('').reduce((acc, el) => acc + (+el), 0);
    let updatePeriod = timeToRender / iterNum;

    let [count, setCount] = useState<number>(0);
    useEffect(() => {

        if (isActive && count < value) {

            let increment = (count + 1000 < value) && ((value - count) / 1000)
                ? 1000
                : (count + 100 < value) && ((value - count) / 100)
                    ? 100
                    : (count + 10 < value) && ((value - count) / 10)
                        ? 10
                        : 1;

            let timeOutId = setTimeout(() => {
                setCount(count + increment);
            }, updatePeriod);

            return () => {
                clearTimeout(timeOutId);
            };
        }
    }, [count, isActive]);

    return (
        <div className={s.statisticsPartWrapper}>
            <h4 className={s.value}>{count}</h4>
            <p className={s.title}>{title}</p>
        </div>
    );
};
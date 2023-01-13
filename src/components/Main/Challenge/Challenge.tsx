import React from 'react';
import s from './Challenge.module.scss';
import {CodeWars} from "./CodeWars/CodeWars";
import {useSelector} from "react-redux";
import {getChallengeDescriptions} from "../../../bll/selectors";

type ChallengePropsType = {

};

export const Challenge: React.FC<ChallengePropsType> = () => {

    let descriptions = useSelector(getChallengeDescriptions);

    return (
        <div id={'challenge'} className={s.challengeWrapper}>
            <div className={s.backgroundSamurai}/>
            <div className={'container'}>
                <h2>Challenge</h2>
                <p className={s.descriptions}>{descriptions}</p>
                <CodeWars/>
            </div>
        </div>
    );
};

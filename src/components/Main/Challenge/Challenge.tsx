import React, {useEffect} from 'react';
import s from './Challenge.module.scss';
import {CodeWars} from "./CodeWars/CodeWars";
import {useSelector} from "react-redux";
import {getChallengeDescriptions} from "../../../bll/selectors";
import {useAppDispatch} from "../../../utilites/customHooks";
import {superScrollListener} from "../../../utilites/utilitesFunctions";

type ChallengePropsType = {

};

export const Challenge: React.FC<ChallengePropsType> = () => {

    const dispatch = useAppDispatch();

    // useEffect for set current page
    useEffect(superScrollListener('challenge', dispatch, undefined, -200), []);

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

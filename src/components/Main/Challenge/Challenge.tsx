import React from 'react';
import s from './Challenge.module.scss';
import {CodeWars} from "./CodeWars/CodeWars";

type ChallengePropsType = {

};

export const Challenge: React.FC<ChallengePropsType> = () => {
    return (
        <div id={'challenge'} className={s.challengeWrapper}>
            <div className={s.backgroundSamurai}/>
            <div className={'container'}>
                <h2>Challenge</h2>
                <p className={s.descriptions}>These are my results on the CodeWars portal. The data is updated automatically using the REST-API. Click the Refresh button to demonstrate the process.</p>
                <CodeWars/>
            </div>
        </div>
    );
};

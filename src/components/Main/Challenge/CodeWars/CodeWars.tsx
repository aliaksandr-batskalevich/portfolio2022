import React from 'react';
import s from './CodeWars.module.scss';

type CodeWarsPropsType = {

};

// from BLL:
const codeWarsData = {
    "username": "aliaksandr-batskalevich",
    "name": "Aliaksandr Batskalevich",
    "honor": 1150,
    "clan": "no clan",
    "leaderboardPosition": 5120,
    "skills": ["javascript"],
    "ranks": {
        "overall": {
            "rank": -3,
            "name": "4 kyu",
            "color": "blue",
            "score": 1150
        },
        "languages": {
            "javascript": {
                "rank": -3,
                "name": "3 kyu",
                "color": "blue",
                "score": 1819
            },
        }
    },
    "codeChallenges": {
        "totalAuthored": 3,
        "totalCompleted": 230
    }
};

export const CodeWars: React.FC<CodeWarsPropsType> = () => {

    let data = codeWarsData;
    let skills = data.skills.join(', ');
    let rankColorStyle = {color: 'dark' + data.ranks.overall.color};

    return (
        <div className={s.codeWarsWrapper}>
            <div className={s.columnWrapper}>
                <div className={s.firstColumn}>
                    <div>
                        <span className={s.title}>username: </span>
                        <span className={s.value}>{data.username}</span>
                    </div>
                    <div>
                        <span className={s.title}>honor: </span>
                        <span className={s.value}>{data.honor}</span>
                    </div>
                    <div>
                        <span className={s.title}>leaderboardPosition: </span>
                        <span className={s.value}>{data.leaderboardPosition}</span>
                    </div>
                    <div>
                        <span className={s.title}>skills: </span>
                        <span className={s.value}>{skills}</span>
                    </div>
                </div>
                <div className={s.secondColumn}>
                    <h3 className={s.rank} style={rankColorStyle}>
                        {data.ranks.overall.name}
                    </h3>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <div className={s.refreshButton}>REFRESH DATA</div>
            </div>
        </div>
    );
};
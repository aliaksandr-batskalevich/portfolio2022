import React, {useEffect} from 'react';
import s from './CodeWars.module.scss';
import {useSelector} from "react-redux";
import {getCodeWarsData, getIsDataFetching, getIsFetchingError, getNumOfCodeWarsUsers} from "../../../../bll/selectors";
import {useAppDispatch} from "../../../../utilites/customHooks";
import {getUserDataTC} from "../../../../bll/challengeReducer";

export const CodeWars = () => {


    let isDataFetching = useSelector(getIsDataFetching);
    let isFetchingError = useSelector(getIsFetchingError);
    let numOfCodeWarsUsers = useSelector(getNumOfCodeWarsUsers);
    let {username, honor, leaderboardPosition, ranks, codeChallenges} = useSelector(getCodeWarsData)
    let {overall, languages} = ranks;
    let languagesToRender = languages ? Object.keys(languages).join(', ') : null;
    let rankName = overall.name;
    let rankColorStyle = {color: 'dark' + overall.color};
    let completedKata = codeChallenges.totalCompleted;

    const dispatch = useAppDispatch();

    useEffect(() => {
        let pr = dispatch(getUserDataTC());
    }, [])

    const refreshUserDataHandler = () => {
        let pr = dispatch(getUserDataTC());
    };

    class OptionPart {
        title: string
        value: null | string | number

        constructor(title: string, value: null | string | number) {
            this.title = title;
            this.value = value;
        };
    }

    let optionPartsArr = [
        new OptionPart('username: ', username),
        new OptionPart('honor: ', honor),
        new OptionPart('leaderboardPosition: ', leaderboardPosition),
        new OptionPart('languages: ', languagesToRender),
        new OptionPart('completed kata: ', completedKata),
    ];

    let optionPartsToRender = optionPartsArr.map((el, index) => <div key={index}>
        <span className={s.title}>{el.title}</span>
        <span className={s.value}>{el.value}</span>

        {/*description for leaderboardPosition */}
        {el.title === 'leaderboardPosition: ' && <span className={s.numOfCodeWarsUsers}>{` of ${numOfCodeWarsUsers}`}</span>}
    </div>);

    let contentWrapperAlignStyle = {justifyContent: isDataFetching || isFetchingError ? 'center' : 'flex-start'};
    let buttonDisabledStyle = isDataFetching
        ? {pointerEvents: 'none' as const, opacity: '0.5'}
        : undefined;

    return (
        <div className={s.codeWarsWrapper}>
            <div className={s.contentWrapper} style={contentWrapperAlignStyle}>
                {isDataFetching
                    ? 'loading...'
                    : isFetchingError
                        ? `Error: ${isFetchingError}`
                        : <>
                            <div className={s.firstColumn}>
                                {optionPartsToRender}
                            </div>
                            <div className={s.secondColumn}>
                                <h3 className={s.rank} style={rankColorStyle}>
                                    {rankName}
                                </h3>
                            </div>
                        </>}
            </div>
            <div className={s.buttonWrapper}>
                <div
                    style={buttonDisabledStyle}
                    className={s.refreshButton}
                    onClick={refreshUserDataHandler}
                >REFRESH DATA
                </div>
            </div>
        </div>
    );
};
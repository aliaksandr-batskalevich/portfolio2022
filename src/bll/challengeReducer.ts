import {ActionsType} from "./store";
import {ThunkAppDispatchType} from "../utilites/customHooks";
import {codeWarsAPI} from "../dal/api";

export type ChallengeActionsType = ReturnType<typeof setIsDataFetching>
    | ReturnType<typeof setCodeWarsData>
    | ReturnType<typeof setIsFetchingError>

type RanksType = {
    overall: {
        rank: null | number
        name: null | string
        color: string
        score: null | number
    }
    languages: null | {
        [language: string]: {
            rank: number
            name: string
            color: string
            score: number
        }
    }
}
export type CodeWarsDataType = {
    id: null | string
    username: null | string
    name: null | string
    honor: null | number
    clan: null | string
    leaderboardPosition: null | number
    skills: null | Array<string>
    ranks: RanksType
    codeChallenges: {
        totalAuthored: null | number
        totalCompleted: null | number
    }
}
export type ChallengeStateType = {
    descriptions: string
    codeWarsUserName: string
    codeWarsData: CodeWarsDataType
    isDataFetching: boolean
    isFetchingError: null | string
}

const challengeInitState: ChallengeStateType = {
    descriptions: 'These are my results on the CodeWars portal. The data is updated automatically using the REST-API. Click the Refresh button to demonstrate the process.',
    codeWarsUserName: 'aliaksandr-batskalevich',
    codeWarsData: {
        id: null,
        username: null,
        name: null,
        honor: null,
        clan: null,
        leaderboardPosition: null,
        skills: null,
        ranks: {
            overall: {
                rank: null,
                name: null,
                color: 'white',
                score: null,
            },
            languages: null,
        },
        codeChallenges: {
            totalCompleted: null,
            totalAuthored: null
        }
    },
    isDataFetching: false,
    isFetchingError: null,
};

export const challengeReducer = (state: ChallengeStateType = challengeInitState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_IS_DATA_FETCHING':
            return {...state, ...action.payload};
        case 'SET_IS_FETCHING_ERROR':
            return {...state, ...action.payload};
        case 'SET_CODE_WARS_DATA':
            return {...state, ...action.payload};
        default:
            return state;
    }
};

const setIsDataFetching = (isDataFetching: boolean) => {
    return {
        type: 'SET_IS_DATA_FETCHING',
        payload: {isDataFetching}
    } as const;
};
const setIsFetchingError = (isFetchingError: null | string) => {
    return {
        type: 'SET_IS_FETCHING_ERROR',
        payload: {isFetchingError}
    } as const;
};
const setCodeWarsData = (codeWarsData: CodeWarsDataType) => {
    return {
        type: 'SET_CODE_WARS_DATA',
        payload: {codeWarsData}
    } as const;
};
export const getUserDataTC = () => async (dispatch: ThunkAppDispatchType) => {
    dispatch(setIsDataFetching(true));
    dispatch(setIsFetchingError(null));
    try {
        let response = await codeWarsAPI.getUserData(challengeInitState.codeWarsUserName);
        dispatch(setCodeWarsData(response.data));
        dispatch(setIsDataFetching(false));
    } catch (error) {
        dispatch(setIsDataFetching(false));
        // @ts-ignore
        dispatch(setIsFetchingError(error.message));
    }
}

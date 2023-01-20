import {ActionsType} from "./store";
import {ToolType} from "./projectsReducer";

export type DefinitionsActionsType = ReturnType<typeof setCurrentProjectFilter>
    | ReturnType<typeof setFeedbackMode>;

export type ProjectFilterType = 'ALL' | ToolType;
export type FeedbackModeType = 'form' | 'preview'
export type DefinitionsStateType = {
    followMeNetworks: Array<string>
    currentProjectFilter: ProjectFilterType
    timeToProjectsColorEffectSec: number
    timeToProjectMenuOpenCloseSec: number
    feedbackMode: FeedbackModeType
};


const definitionsInitState: DefinitionsStateType = {
    followMeNetworks: [ 'linkedIn', 'gitHub', 'codeWars'],
    currentProjectFilter: 'ALL',
    timeToProjectsColorEffectSec: 3,
    timeToProjectMenuOpenCloseSec: 1,
    feedbackMode: "form",
};

export const definitionsReducer = (state: DefinitionsStateType = definitionsInitState, action: ActionsType) => {
    switch (action.type) {
        case "SET_CURRENT_PROJECT_FILTER":
            return {...state, ...action.payload};
        case 'SET_FEEDBACK_MODE':
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const setCurrentProjectFilter = (currentProjectFilter: ProjectFilterType) => {
    return {
        type: 'SET_CURRENT_PROJECT_FILTER',
        payload: {currentProjectFilter}
    } as const;
};
export const setFeedbackMode = (feedbackMode: FeedbackModeType) => {
    return {
        type: 'SET_FEEDBACK_MODE',
        payload: {feedbackMode}
    } as const;
};
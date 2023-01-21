import {ActionsType} from "./store";
import {ToolType} from "./projectsReducer";

export type DefinitionsActionsType = ReturnType<typeof setCurrentProjectFilter>
    | ReturnType<typeof setFeedbackMode>
    | ReturnType<typeof setFeedbackPreview>
    | ReturnType<typeof setClearFeedbackPreview>;

export type ProjectFilterType = 'ALL' | ToolType;
export type FeedbackModeType = 'form' | 'preview'
export type EmailJSKeysType = {
    SERVICE_ID: string
    TEMPLATE_ID: string
    PUBLIC_KEY: string
}
export type DefinitionsStateType = {
    followMeNetworks: Array<string>
    currentProjectFilter: ProjectFilterType
    timeToProjectsColorEffectSec: number
    timeToProjectMenuOpenCloseSec: number
    feedbackMode: FeedbackModeType
    feedbackPreview: string
    emailJSKeys: EmailJSKeysType
};


const definitionsInitState: DefinitionsStateType = {
    followMeNetworks: ['linkedIn', 'gitHub', 'codeWars'],
    currentProjectFilter: 'ALL',
    timeToProjectsColorEffectSec: 3,
    timeToProjectMenuOpenCloseSec: 1,
    feedbackMode: "form",
    feedbackPreview: '',
    emailJSKeys: {
        SERVICE_ID: 'service_ml168on',
        TEMPLATE_ID: 'feedback_on_my_resume',
        PUBLIC_KEY: 'HvXpvzrDDZoVDJQG4',
    }
};

export const definitionsReducer = (state: DefinitionsStateType = definitionsInitState, action: ActionsType) => {
    switch (action.type) {
        case "SET_CURRENT_PROJECT_FILTER":
            return {...state, ...action.payload};
        case 'SET_FEEDBACK_MODE':
            return {...state, ...action.payload};
        case 'SET_FEEDBACK_PREVIEW':
            return {...state, ...action.payload};
        case 'SET_CLEAR_FEEDBACK_PREVIEW':
            return {...state, feedbackPreview: ''};
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
export const setFeedbackPreview = (feedbackPreview: string) => {
    return {
        type: 'SET_FEEDBACK_PREVIEW',
        payload: {feedbackPreview},
    } as const;
};
export const setClearFeedbackPreview = () => {
    return {
        type: 'SET_CLEAR_FEEDBACK_PREVIEW'
    } as const;
};
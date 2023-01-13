import {ActionsType} from "./store";
import {ToolType} from "./projectsReducer";

export type DefinitionsActionsType = ReturnType<typeof setCurrentProjectFilter>;

export type ProjectFilterType = 'ALL' | ToolType;
export type DefinitionsStateType = {
    followMeNetworks: Array<string>
    currentProjectFilter: ProjectFilterType
    timeToProjectsColorEffectSec: number
    timeToProjectMenuOpenCloseSec: number
};


const definitionsInitState: DefinitionsStateType = {
    followMeNetworks: [ 'linkedIn', 'gitHub', 'codeWars'],
    currentProjectFilter: 'ALL',
    timeToProjectsColorEffectSec: 3,
    timeToProjectMenuOpenCloseSec: 1
};

export const definitionsReducer = (state: DefinitionsStateType = definitionsInitState, action: ActionsType) => {
    switch (action.type) {
        case "SET_CURRENT_PROJECT_FILTER":
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
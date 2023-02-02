import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {generalInfoReducer} from "./generalInfoReducer";
import {contactsReducer} from "./contactsReducer";
import {aboutMeReducer} from "./aboutMeReducer";
import {DefinitionsActionsType, definitionsReducer} from "./definitionsReducer";
import {ProjectsActionsType, projectsReducer} from "./projectsReducer";
import {ChallengeActionsType, challengeReducer} from "./challengeReducer";
import {resumeReducer} from "./resumeReduucer";
import {SnackbarActionsType, snackbarReducer} from "./snackbarReducer";


export type ActionsType = DefinitionsActionsType | ProjectsActionsType | ChallengeActionsType | SnackbarActionsType;
export type RootAppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
    generalInfo: generalInfoReducer,
    contacts: contactsReducer,
    aboutMe: aboutMeReducer,
    definitions: definitionsReducer,
    projects: projectsReducer,
    challenge: challengeReducer,
    resume: resumeReducer,
    snackbar: snackbarReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;
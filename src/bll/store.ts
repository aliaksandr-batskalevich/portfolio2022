import {combineReducers, legacy_createStore} from "redux";
import {generalInfoReducer} from "./generalInfoReducer";

export type ActionsType = {type: 'TEST'};
export type RootAppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
    generalInfo: generalInfoReducer,

});

export const store = legacy_createStore(rootReducer);
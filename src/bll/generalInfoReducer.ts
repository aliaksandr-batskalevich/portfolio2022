import {ActionsType} from "./store";

export type GeneralInfoStateType = typeof generalInfoInitState;

const generalInfoInitState = {
    fullName: {firstName: 'Aliaksandr', lastName: 'Batskalevich'},
    birthday: '16/09/1988',
    position: 'Junior',
    status: 'Open to work',
    languages: {
        belarusian: 'native',
        russian: 'native',
        english: 'A2'
    },
};

export const generalInfoReducer = (state: GeneralInfoStateType = generalInfoInitState, action: ActionsType) => {
    switch (action.type) {
        default: return state;
    }
};
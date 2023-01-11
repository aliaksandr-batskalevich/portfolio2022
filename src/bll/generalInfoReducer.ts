import {ActionsType} from "./store";

export type GeneralInfoStateType = typeof GeneralInfoInitState;

const GeneralInfoInitState = {
    fullName: {firstName: 'Aliaksandr', lastName: 'Batskalevich'},
    birthday: '16/09/1988',
    country: 'Belarus',
    status: 'Open to work',
    links: {
        socialNetworks: {
            linkedIn: 'https://www.linkedin.com/in/aliaksandr-batskalevich',
        },
        gitHub: 'https://github.com/aliaksandr-batskalevich',
        codeWars: 'https://www.codewars.com/users/aliaksandr-batskalevich',
    },
    mainQualities: ['PROGRAMMER', 'REACT-DEVELOPER', 'JS-DEVELOPER', 'HTML-DEVELOPER', 'ENGINEER', 'CONSTRUCTOR'],
};

export const generalInfoReducer = (state: GeneralInfoStateType = GeneralInfoInitState, action: ActionsType) => {
    switch (action.type) {
        default: return state;
    }
};
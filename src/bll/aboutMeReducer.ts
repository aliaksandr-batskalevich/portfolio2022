import {ActionsType} from "./store";
import {v1} from "uuid";

export type SkillType = {
    id: string
    title: string
    value: number
}
export type MyQuoteType = { text: string, subscription: string }
export type AboutMeStateType = typeof aboutMeInitState;

const aboutMeInitState = {
    mainQualities: ['PROGRAMMER', 'REACT-DEVELOPER', 'JS-DEVELOPER', 'HTML-DEVELOPER', 'ENGINEER', 'CONSTRUCTOR'],
    summary: 'I am a junior JS/React-developer. Until recently, my activity was related to decision-making for tasks in non-standard and critical situations. In my free time I enjoy repairing and designing various mechanisms. In the future, I see myself as a Full Stack Developer. In the near future I plan to improve the English language, and then start studying NodeJS and Java.',
    skills: [
        {id: v1(), title: 'HTML/CSS', value: 90},
        {id: v1(), title: 'JS', value: 70},
        {id: v1(), title: 'TS', value: 60},
        {id: v1(), title: 'REACT', value: 60},
        {id: v1(), title: 'REDUX', value: 70},
    ],
    myQuote: {
        text: '\"I can do anything, it just takes knowledge and time. Give me time and I will do it.\"',
        subscription: 'Aliaksandr B.'
    },
}

export const aboutMeReducer = (state: AboutMeStateType = aboutMeInitState, action: ActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
};
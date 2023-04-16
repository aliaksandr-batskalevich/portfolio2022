import {ActionsType} from "./store";
import {v1} from "uuid";

export type StudyType = {
    id: string
    institution: string
    speciality: string
    period: string
};
export type WorkType = {
    id: string
    workPlace: string
    position: string
    period: string
};
export type StatisticType = {
    id: string
    title: string
    value: number
};
export type ResumeStateType = {
    experience: {
        studies: Array<StudyType>
        workExperience: Array<WorkType>
    },
    statisticsData: Array<StatisticType>
};

const resumeInitState: ResumeStateType = {
    experience: {
        studies: [
            {id: v1(), institution: 'IT-INCUBATOR', speciality: 'Front-end developer (React+Typescript)', period: 'JUL 2021 - DEC 2021'},
            {id: v1(), institution: 'IT SCHOOL MYFREEDOM', speciality: 'Front-end developer (HTML, CSS)', period: 'FEB 2021 - MAY 2021'},
            {id: v1(), institution: 'COMMAND AND ENGINEERING INSTITUTE OF THE MINISTRY OF EMERGENCY SITUATIONS OF THE REPUBLIC OF BELARUS', speciality: 'Emergency response engineer', period: 'JUL 2006 - JUL 2010'},
        ],
        workExperience: [
            {id: v1(), workPlace: 'Freelance', position: 'Fullstack developer', period: 'MAR 2023 - present time'},
            {id: v1(), workPlace: 'SCAND', position: 'Front-end developer', period: 'JAN 2022 - MAR 2023'},
            {id: v1(), workPlace: 'BREST REGIONAL DEPARTMENT OF THE MINISTRY OF EMERGENCY SITUATIONS', position: 'Chief of firefighting staff', period: 'AUG 2010 - DEC 2021'},
        ],
    },
    statisticsData:[
        {id: v1(), title: 'Projects', value: 9},
        {id: v1(), title: 'Startups', value: 2},
        {id: v1(), title: 'Hours of study', value: 1896},
        {id: v1(), title: 'Mileage', value: 1376},
    ],
};

export const resumeReducer = (state: ResumeStateType = resumeInitState, action: ActionsType) => {
    switch (action.type) {
        default: return state;
    }
};
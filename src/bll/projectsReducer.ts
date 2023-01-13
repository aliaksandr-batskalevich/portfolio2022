import {ActionsType} from "./store";
import {v1} from "uuid";

export type ProjectsActionsType = ReturnType<typeof addCurrentProjectRating>
export type ToolType =
    'HTML'
    | 'CSS'
    | 'SCSS'
    | 'JavaScript'
    | 'TypeScript'
    | 'React'
    | 'Redux'
    | 'REST-API'
    | 'TDD'
    | 'StoryBook'
    | 'Redux-Form'
    | 'MUI'
    | 'Reselect';
export type ProjectType = {
    id: string
    title: string
    image: string
    description: string
    codeLink: string
    viewLink: string
    tools: Array<ToolType>
    averageRating: number
};
export type CurrentProjectRatingType = {
    [id: string]: number
};

type projectsStateType = {
    myProjects: Array<ProjectType>
    currentProjectRating: CurrentProjectRatingType
};

const projectsInitState: projectsStateType = {
    myProjects: [
        {
            id: v1(),
            title: 'Social Network',
            image: 'https://techjournal.org/wp-content/uploads/2022/01/Goals-of-Social-Network-Analysis.jpg',
            description: 'My first project with using React, Redux, Redux-form, REST-API.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
            tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form"],
            averageRating: 4.5,
        },
        {
            id: v1(),
            title: 'TodoList',
            image: 'https://static8.depositphotos.com/1177973/836/i/600/depositphotos_8360861-stock-photo-to-do-list-with-pencil.jpg',
            description: 'This project collects the main tools of React and other relevant libraries that I studied.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
            tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form", "MUI"],
            averageRating: 4,
        },
        {
            id: v1(),
            title: 'Portfolio',
            image: 'https://m.economictimes.com/thumb/msid-82354381,width-866,height-659,resizemode-4,imgsize-133475/portfolio-reshuffle.jpg',
            description: 'The project does not use third-party libraries for visual effects. All components are written using native JavaScript.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/portfolio2022/tree/main/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/portfolio2022',
            tools: ["HTML", "SCSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form", "StoryBook", 'Reselect'],
            averageRating: 4.2,
        },
        {
            id: v1(),
            title: 'Micro Tasks',
            image: 'https://s.ura.news/1200_900/images/news/upload/news/606/094/1052606094/454095_Pitomnik_dlya_enotov_Enotobum_Permy_enot_250x0_5760.3840.0.0.jpg',
            description: 'Micro tasks I did while learning React.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-ignatTasks/tree/master/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-ignatTasks',
            tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API"],
            averageRating: 3.7,
        },
        {
            id: v1(),
            title: 'Snake Game',
            image: 'https://play-lh.googleusercontent.com/OUaRAgbJ4136zmD04hVTTHF6isgROSikVSauxgKpdkSvkeJ7CJq0mqjEge4TRWlB7XZY',
            description: 'My first project in JavaScript. My best score is 33. Try to win!',
            codeLink: 'https://github.com/aliaksandr-batskalevich/jsForChildren-snakeGame',
            viewLink: 'https://aliaksandr-batskalevich.github.io/jsForChildren-snakeGame',
            tools: ["HTML", "CSS", "JavaScript"],
            averageRating: 5,
        },
        {
            id: v1(),
            title: 'HTML Project',
            image: 'https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e',
            description: 'My first project with using HTML and CSS.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/htmlFinalProject',
            viewLink: 'https://aliaksandr-batskalevich.github.io/htmlFinalProject',
            tools: ["HTML", "CSS"],
            averageRating: 4.1,
        },
    ],
    currentProjectRating: {},
};

export const projectsReducer = (state: projectsStateType = projectsInitState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD_CURRENT_PROJECT_RATING':
            return {...state, currentProjectRating: {...state.currentProjectRating, [action.payload.id]: action.payload.currentRating}};
        default:
            return state;
    }
};

export const addCurrentProjectRating = (id: string, currentRating: number) => {
    return {
        type: 'ADD_CURRENT_PROJECT_RATING',
        payload: {id, currentRating},
    } as const;
};
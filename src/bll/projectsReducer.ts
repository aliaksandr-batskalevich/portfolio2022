import {ActionsType} from "./store";
import {v1} from "uuid";

export type ProjectsActionsType = ReturnType<typeof changeCurrentProjectRating>
    | ReturnType<typeof removeCurrentProjectRating>
    | ReturnType<typeof setProjectToFormRating>
    | ReturnType<typeof changeProjectComments>
    | ReturnType<typeof setFeedbackPreview>
    | ReturnType<typeof setClearFeedbackPreview>

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
export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingStateType = {
    averageRating: number
    currentRating: null | RatingType
    dateCurrentRatingAdd: null | Date
};
export type ProjectType = {
    id: string
    title: string
    image: string
    description: string
    codeLink: string
    viewLink: string
    tools: Array<ToolType>
    rating: RatingStateType
    comments: string
};
export type ProjectToRatingType = {
    id: string
    title: string
    rating: RatingStateType
    comments: string
};
export type FeedbackPreviewType = {
    name: string
    email: string
    text: string
    rating: Record<string, string>
    comments: Record<string, string>
};

export type ProjectsStateType = {
    myProjects: Array<ProjectType>
    feedbackPreview: FeedbackPreviewType
};

const clearFeedbackPreview: FeedbackPreviewType = {
    name: '',
    email: '',
    text: '',
    rating: {},
    comments: {},
};

const projectsInitState: ProjectsStateType = {
    myProjects: [
        {
            id: v1(),
            title: 'Social Network',
            image: 'https://techjournal.org/wp-content/uploads/2022/01/Goals-of-Social-Network-Analysis.jpg',
            description: 'My first project with using React, Redux, Redux-form, REST-API.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
            tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form"],
            rating: {
                averageRating: 4.5,
                currentRating: null,
                dateCurrentRatingAdd: null,
            },
            comments: '',
        },
        {
            id: v1(),
            title: 'TodoList',
            image: 'https://static8.depositphotos.com/1177973/836/i/600/depositphotos_8360861-stock-photo-to-do-list-with-pencil.jpg',
            description: 'This project collects the main tools of React and other relevant libraries that I studied.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
            tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form", "MUI"],
            rating: {
                averageRating: 4,
                currentRating: null,
                dateCurrentRatingAdd: null,
            },
            comments: '',
        },
        {
            id: v1(),
            title: 'Portfolio',
            image: 'https://m.economictimes.com/thumb/msid-82354381,width-866,height-659,resizemode-4,imgsize-133475/portfolio-reshuffle.jpg',
            description: 'The project does not use third-party libraries for visual effects. All components are written using native JavaScript.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/portfolio2022/tree/main/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/portfolio2022',
            tools: ["HTML", "SCSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form", "StoryBook", 'Reselect'],
            rating: {
                averageRating: 4.2,
                currentRating: null,
                dateCurrentRatingAdd: null,
            },
            comments: '',
        },
        {
            id: v1(),
            title: 'Micro Tasks',
            image: 'https://s.ura.news/1200_900/images/news/upload/news/606/094/1052606094/454095_Pitomnik_dlya_enotov_Enotobum_Permy_enot_250x0_5760.3840.0.0.jpg',
            description: 'Micro tasks I did while learning React.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-ignatTasks/tree/master/src',
            viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-ignatTasks',
            tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API"],
            rating: {
                averageRating: 4.2,
                currentRating: null,
                dateCurrentRatingAdd: null,
            },
            comments: '',
        },
        {
            id: v1(),
            title: 'Snake Game',
            image: 'https://play-lh.googleusercontent.com/OUaRAgbJ4136zmD04hVTTHF6isgROSikVSauxgKpdkSvkeJ7CJq0mqjEge4TRWlB7XZY',
            description: 'My first project in JavaScript. My best score is 33. Try to win!',
            codeLink: 'https://github.com/aliaksandr-batskalevich/jsForChildren-snakeGame',
            viewLink: 'https://aliaksandr-batskalevich.github.io/jsForChildren-snakeGame',
            tools: ["HTML", "CSS", "JavaScript"],
            rating: {
                averageRating: 4.2,
                currentRating: null,
                dateCurrentRatingAdd: null,
            },
            comments: '',
        },
        {
            id: v1(),
            title: 'HTML Project',
            image: 'https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e',
            description: 'My first project with using HTML and CSS.',
            codeLink: 'https://github.com/aliaksandr-batskalevich/htmlFinalProject',
            viewLink: 'https://aliaksandr-batskalevich.github.io/htmlFinalProject',
            tools: ["HTML", "CSS"],
            rating: {
                averageRating: 4.2,
                currentRating: null,
                dateCurrentRatingAdd: null,
            },
            comments: '',
        },
    ],
    feedbackPreview: clearFeedbackPreview,
};

export const projectsReducer = (state: ProjectsStateType = projectsInitState, action: ActionsType): ProjectsStateType => {
    switch (action.type) {
        case 'SET_PROJECT_TO_FORM_RATING': {
            return {
                ...state,
                myProjects: state.myProjects.map(pr => pr.id === action.payload.id ? {
                    ...pr,
                    rating: {
                        ...pr.rating,
                        currentRating: 0,
                        dateCurrentRatingAdd: pr.rating.dateCurrentRatingAdd ? pr.rating.dateCurrentRatingAdd : new Date()
                    }
                } : pr)
            };
        }
        case 'ADD_CURRENT_PROJECT_RATING':
            return {
                ...state, myProjects: state.myProjects.map(pr => pr.id === action.payload.id
                    ? {
                        ...pr,
                        rating: {
                            ...pr.rating,
                            currentRating: action.payload.currentRating,
                            dateCurrentRatingAdd: pr.rating.dateCurrentRatingAdd ? pr.rating.dateCurrentRatingAdd : new Date()
                        }
                    }
                    : pr)
            };
        case 'REMOVE_CURRENT_PROJECT_RATING':
            return {
                ...state,
                myProjects: state.myProjects.map(pr => pr.id === action.payload.id ? {
                    ...pr,
                    comments: '',
                    rating: {...pr.rating, currentRating: null, dateCurrentRatingAdd: null}
                } : pr)
            };
        case 'CHANGE_PROJECT_COMMENTS':
            return {
                ...state,
                myProjects: state.myProjects.map(pr => pr.id === action.payload.id ? {
                    ...pr,
                    comments: action.payload.comments
                } : pr)
            };
        case 'SET_FEEDBACK_PREVIEW':
            return {...state, ...action.payload};
        case 'SET_CLEAR_FEEDBACK_PREVIEW':
            return {...state, feedbackPreview: clearFeedbackPreview};
        default:
            return state;
    }
};

export const setProjectToFormRating = (id: string) => {
    return {
        type: 'SET_PROJECT_TO_FORM_RATING',
        payload: {id}
    } as const;
};
export const changeCurrentProjectRating = (id: string, currentRating: RatingType) => {
    return {
        type: 'ADD_CURRENT_PROJECT_RATING',
        payload: {id, currentRating},
    } as const;
};
export const removeCurrentProjectRating = (id: string) => {
    return {
        type: 'REMOVE_CURRENT_PROJECT_RATING',
        payload: {id}
    } as const;
};
export const changeProjectComments = (id: string, comments: string) => {
    return {
        type: 'CHANGE_PROJECT_COMMENTS',
        payload: {id, comments}
    } as const;
};
export const setFeedbackPreview = (feedbackPreview: FeedbackPreviewType) => {
    return {
        type: 'SET_FEEDBACK_PREVIEW',
        payload: {feedbackPreview}
    } as const;
};
export const setClearFeedbackPreview = () => {
    return {
        type: 'SET_CLEAR_FEEDBACK_PREVIEW'
    } as const;
};
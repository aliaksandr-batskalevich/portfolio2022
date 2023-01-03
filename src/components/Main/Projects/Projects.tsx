import React, {useState} from "react";
import s from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Filter} from "./Filter/Filter";

// from BLL:
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
    | 'MUI';
export type ProjectType = {
    id: string
    title: string
    image: string
    description: string
    codeLink: string
    viewLink: string
    tools: Array<ToolType>
};
export type FilterType = ToolType | 'ALL';
let projects: Array<ProjectType> = [
    {
        id: 'nkhhjkjkll;;ll;,',
        title: 'Social Network',
        image: 'https://techjournal.org/wp-content/uploads/2022/01/Goals-of-Social-Network-Analysis.jpg',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
        tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form"],
    },
    {
        id: 'nkhhjj',
        title: 'TodoList',
        image: 'https://static8.depositphotos.com/1177973/836/i/600/depositphotos_8360861-stock-photo-to-do-list-with-pencil.jpg',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
        tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form", "MUI"],
    },
    {
        id: 'nkhkj',
        title: 'Portfolio',
        image: 'https://m.economictimes.com/thumb/msid-82354381,width-866,height-659,resizemode-4,imgsize-133475/portfolio-reshuffle.jpg',
        description: 'My portfolio',
        codeLink: 'https://github.com/aliaksandr-batskalevich/portfolio2022/tree/main/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/portfolio2022',
        tools: ["HTML", "SCSS", "TypeScript", "React", "Redux", "TDD", "REST-API", "Redux-Form","StoryBook"],
    },
    {
        id: 'nkkj',
        title: 'Micro Tasks',
        image: 'https://s.ura.news/1200_900/images/news/upload/news/606/094/1052606094/454095_Pitomnik_dlya_enotov_Enotobum_Permy_enot_250x0_5760.3840.0.0.jpg',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-ignatTasks/tree/master/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-ignatTasks',
        tools: ["HTML", "CSS", "TypeScript", "React", "Redux", "TDD", "REST-API"],
    },
    {
        id: 'nkk',
        title: 'Snake Game',
        image: 'https://play-lh.googleusercontent.com/OUaRAgbJ4136zmD04hVTTHF6isgROSikVSauxgKpdkSvkeJ7CJq0mqjEge4TRWlB7XZY',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/jsForChildren-snakeGame',
        viewLink: 'https://aliaksandr-batskalevich.github.io/jsForChildren-snakeGame',
        tools: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 'nk',
        title: 'HTML Project',
        image: 'https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/htmlFinalProject',
        viewLink: 'https://aliaksandr-batskalevich.github.io/htmlFinalProject',
        tools: ["HTML", "CSS"],
    },
];

export const Projects = () => {

    const [filter, setFilter] = useState<FilterType>('ALL');

    // code for activate Component
    let [isActive, setIsActive] = useState<boolean>(false);
    const setIsActiveHandler = () => {
        setIsActive(!isActive);
    };

    // state for eventPointer control.
    const [projectState, setProjectState] = useState<null | string>(null);
    const setProjectStateHandler = (state: null | string) => {
        setProjectState(state);
    };

    let projectsToRender = projects
        .filter(el => filter === 'ALL' || el.tools.some(el => el === filter))
        .map((el, index, array) => <Project
            key={el.id}
            projectState={projectState}
            project={el}
            setProjectState={setProjectStateHandler}

            // timeOutEffects (numbers should be equal)
            orderTimeOut={index * 0}
            colorTimeOut={array.length * 10}
        />);

    return (
        <div id="projects" className={s.projectsPageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2 onClick={setIsActiveHandler}>Projects</h2>
                </div>
                {isActive && <>
                    <Filter
                        projects={projects}
                        currentFilter={filter}
                        setFilter={setFilter}
                    />
                    <div className={s.projectOutFlexWrapper}>
                        <div className={s.projectsFlexWrapper}>
                            {projectsToRender}
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}
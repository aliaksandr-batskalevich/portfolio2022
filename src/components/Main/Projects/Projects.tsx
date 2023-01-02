import React, {useState} from "react";
import s from './Projects.module.scss'
import {Project} from "./Project/Project";

// from BLL:
export type ProjectType = {
    id: string
    title: string
    image: string
    description: string
    codeLink: string
    viewLink: string
};
let projects: Array<ProjectType> = [
    {
        id: 'nkhhjkjkll;;ll;,',
        title: 'Social Network',
        image: 'https://techjournal.org/wp-content/uploads/2022/01/Goals-of-Social-Network-Analysis.jpg',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
    },
    {
        id: 'nkhhjj',
        title: 'TodoList',
        image: 'https://static8.depositphotos.com/1177973/836/i/600/depositphotos_8360861-stock-photo-to-do-list-with-pencil.jpg',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
    },
    {
        id: 'nkhkj',
        title: 'Portfolio',
        image: 'https://m.economictimes.com/thumb/msid-82354381,width-866,height-659,resizemode-4,imgsize-133475/portfolio-reshuffle.jpg',
        description: 'My portfolio',
        codeLink: 'https://github.com/aliaksandr-batskalevich/portfolio2022/tree/main/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/portfolio2022',
    },
    {
        id: 'nkkj',
        title: 'Micro Tasks',
        image: 'https://s.ura.news/1200_900/images/news/upload/news/606/094/1052606094/454095_Pitomnik_dlya_enotov_Enotobum_Permy_enot_250x0_5760.3840.0.0.jpg',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-ignatTasks/tree/master/src',
        viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-ignatTasks',
    },
    {
        id: 'nkk',
        title: 'Snake Game',
        image: 'https://play-lh.googleusercontent.com/OUaRAgbJ4136zmD04hVTTHF6isgROSikVSauxgKpdkSvkeJ7CJq0mqjEge4TRWlB7XZY',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/jsForChildren-snakeGame',
        viewLink: 'https://aliaksandr-batskalevich.github.io/jsForChildren-snakeGame',
    },
    {
        id: 'nk',
        title: 'HTML Project',
        image: 'https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e',
        description: 'My first project with using React, Redux, Redux-form, REST-API.',
        codeLink: 'https://github.com/aliaksandr-batskalevich/htmlFinalProject',
        viewLink: 'https://aliaksandr-batskalevich.github.io/htmlFinalProject',
    },
];

export const Projects = () => {

    // state for eventPointer control.
    const [projectState, setProjectState] = useState<null | string>(null);
    const setProjectStateHandler = (state: null | string) => {
        setProjectState(state);
    };

    let projectsToRender = projects.map(el => <Project key={el.id} projectState={projectState} project={el} setProjectState={setProjectStateHandler}/>);

    return (
        <div id="projects" className={s.projectsPageWrapper}>
            <div className='container'>
                <div className={s.titleWrapper}>
                    <h2>Projects</h2>
                </div>
                <div className={s.projectsFlexWrapper}>
                    {projectsToRender}
                </div>
            </div>
        </div>
    )
}
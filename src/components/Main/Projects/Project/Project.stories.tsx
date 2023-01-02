import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Project } from './Project';
import {v1} from "uuid";
import {ProjectType} from "../Projects";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Project/ProjectsPage/Project',
  component: Project,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Project>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

let project =  {
    id: v1(),
    title: 'Social Network',
    image: 'https://techjournal.org/wp-content/uploads/2022/01/Goals-of-Social-Network-Analysis.jpg',
    description: 'My first project with using React, Redux, Redux-form, REST-API.',
    codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
    viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
  };

const [projectState, setProjectState] = useState<null | string>(null);


const Template: ComponentStory<typeof Project> = (args) => <Project project={project} projectState={ projectState} setProjectState={setProjectState} />;

export const SimpleProject = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Project } from './Project';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Project/ProjectsPage/Project',
  component: Project,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Project>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Project> = (args) => <Project />;

export const SimpleProject = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

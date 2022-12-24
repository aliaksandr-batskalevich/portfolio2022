import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skill } from './Skill';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Project/AboutMePage/Skill',
  component: Skill,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Skill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Skill> = (args) => <Skill value={80} title={'HTML'} />;

export const SimpleSkill = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

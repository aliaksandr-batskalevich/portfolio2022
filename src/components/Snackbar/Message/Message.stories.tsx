import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Message} from './Message';

export default {
    title: 'Snackbar/Message',
    component: Message,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },

} as ComponentMeta<typeof Message>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
    id: '123',
    type: "error",
    message: "It's error, Baby!",
    closeMessage: (id: string) => {alert('close')},
};


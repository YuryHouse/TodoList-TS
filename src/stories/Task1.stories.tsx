import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Task} from "../Task";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {TaskType} from "../Todolist";
import {useSelector} from "react-redux";
import {AppRootState} from "../state/store";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Task1',
  component: Task,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Task1WithRedux = () => {
    const task = useSelector<AppRootState, TaskType>(state => state.tasks['todolistId1'].filter(t => t.id === "qwert")[0])
    return <Task task={task} todolistId={'todolistId1'}/>
}

const Template: ComponentStory<typeof Task1WithRedux> = (args) => <Task1WithRedux  />;

export const Task1Story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Task1Story.args = {};


import {Task} from "./Task";
import React from "react";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";

export default {
    title: 'Task Component',
    component: Task,
    decorators: [ReduxStoreProviderDecorator],
}


// export const TaskBaseExample = () => {
//     return <>
//         <Task
//         task={ {id: '1', isDone: true, title: 'CSS'} }
//         todolistId={'todolistId1'}
//         />
//         <Task
//             task={ {id: '2', isDone: false, title: 'JS'} }
//             todolistId={'todolistId2'}
//         />
//     </>
// }
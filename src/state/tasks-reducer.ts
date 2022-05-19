import {TasksStateType} from '../AppWithRedux';
import {AddTodolistActionType, RemoveTodolistActionType} from './todolists-reducer'
import {v1} from 'uuid';

const initialState: TasksStateType = {
    // [todolistId1]: [
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true}
    // ],
    // [todolistId2]: [
    //     {id: v1(), title: "Milk", isDone: true},
    //     {id: v1(), title: "React Book", isDone: true}
    // ]
}


    export const tasksReducer = (state: TasksStateType = initialState, action: tasksReducerType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                 [action.payload.todolistId]: state[action.payload.todolistId]
                    .filter(t => t.id !== action.payload.id)
            }
        }
        case 'ADD-TASK': {
            return {
                ...state,
                [action.payload.todolistId]:
                    [{id: v1(), title: action.payload.title, isDone: false},
                        ...state[action.payload.todolistId]]
            }
        }
        case 'CHANGE-TASK-STATUS': {
            return {
                ...state,
                [action.payload.todolistId]:
                    state[action.payload.todolistId]
                        .map(t => t.id === action.payload.id ? ({...t, isDone: action.payload.isDone}) : t)
            }
        }
        case 'CHANGE-TASK-TITLE': {
            return {
                ...state,
                [action.payload.todolistId]:
                    state[action.payload.todolistId]
                        .map(t => t.id === action.payload.id ? ({...t, title: action.payload.title}) : t)
            }
        }
        case 'ADD-TODOLIST': {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = [];
            return stateCopy;
        }
        case 'REMOVE-TODOLIST': {
           const stateCopy = {...state};
           delete stateCopy[action.id];
            return stateCopy
        }
        default:
            return state;
            // throw new Error("I don't understand this type")
    }
}

type tasksReducerType =  removeTaskACType | addTaskACType | changeTaskStatusACType | changeTaskTitleACType | AddTodolistActionType | RemoveTodolistActionType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {id, todolistId}
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {title, todolistId}
    } as const
}

type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        payload: {id, isDone, todolistId}
    } as const
}
type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (id: string, title: string, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        payload: {id, title, todolistId}
    } as const
}


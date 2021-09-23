import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK, TOGGLE_DONE } from "../const";

export const addTask = (newTask) => ({
    type: ADD_TASK,
    payload: newTask
})

export const editTask = ({id,todo}) => ({
    type: EDIT_TASK,
    payload: {id, todo}
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload : id
})

export const filterTask = (filterName) => ({
    type: FILTER_TASK,
    payload: filterName
})

export const toggleDone = (id) => ({
    type: TOGGLE_DONE,
    payload: id
})




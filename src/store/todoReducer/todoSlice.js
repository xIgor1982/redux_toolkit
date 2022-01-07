import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from "uuid";

const initialState = {
    todos: []
}

const reducers = {
    addTodo(state, action){
        state.todos.push({
            id: uuidv4(),
            text: action.payload.text,
            completed: false
        })
    },
    removeTodo(state, action){
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action){
        const toggledTod = state.todos.find(todo => todo.id === action.payload.id)
        toggledTod.completed = !toggledTod.completed
    }
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions
export default todoSlice.reducer
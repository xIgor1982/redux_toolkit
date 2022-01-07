import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            console.log('addTodo => action')
            console.log(action)

            state.todos.push({
                id: uuidv4(),
                text: action.payload.text,
                completed: false
            })
        },
        toggleTodoComplete(state, action) {
            console.log('toggleTodoComplete => action')
            console.log(action)

            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
        removeTodo(state, action) {
            console.log('removeTodo => action')
            console.log(action)

            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, toggleTodoComplete, removeTodo} = todoSlice.actions

export default  todoSlice.reducer
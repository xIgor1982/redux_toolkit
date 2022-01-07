import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoReducer/todoSlice.js'

export const store = configureStore({
    reducer: {
        app: todoReducer
    },
})
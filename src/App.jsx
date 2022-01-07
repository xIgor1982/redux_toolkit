import {useState} from "react";
import './App.css';
import {v4 as uuidv4} from 'uuid';
import {Box, Button, Checkbox, Grid, Paper, TextField, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import TodoList from "./component/TodoList";
import InputField from "./component/InputField";

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    text,
                    completed: false
                }
            ])
            setText('')
        }
    }

    const toggleTodoComplete = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if(todo.id !== todoId) return todo

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            )
        )
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return (
        <div className="App">
            <h1>Todo List</h1>
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTodo}
                nameBtn={'Add Todo'}
            />
            <TodoList
                todos={todos}
                toggleTodoComplete={toggleTodoComplete}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;

import {useState} from "react";
import './App.css';
import {v4 as uuidv4} from 'uuid';
import {Box, Button, Checkbox, Grid, Paper, TextField, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

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

    const onCheckedTodo = () => {

    }

    return (
        <div className="App">
            <h1>Todo List</h1>
            <Grid
                container
                sx={{width: 450, margin: '0 auto'}}
            >
                <Grid
                    item
                    xs={9}
                >
                    <TextField
                        id="outlined-basic"
                        label="Todo"
                        variant="outlined"
                        value={text} onChange={(e) => setText(e.target.value)}
                        sx={{width: '100%'}}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="contained"
                        onClick={addTodo}
                        sx={{width: '100%', height: '100%'}}
                    >
                        Add Todo
                    </Button>
                </Grid>
            </Grid>

            {todos.map(todo => <Paper elevation={3} key={todo.id} sx={{width: 450, margin: '10px auto'}}>
                <Grid
                    container
                    alignItems='center'
                    sx={{margin: '0 auto'}}
                >
                    <Grid
                        item xs={2}
                    >
                        <Checkbox
                            {...label}
                            checked={todo.completed}
                            onChange={() => toggleTodoComplete(todo.id)}
                            className='checkbox_on'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={8}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="span"
                            className={todo.completed? 'checkbox_on' : ''}
                        >
                            {todo.text}
                        </Typography>
                    </Grid>
                    <Grid
                        item xs={2}
                    >
                        <IconButton
                            aria-label="Clear"
                            size="small"
                            onClick={() => removeTodo(todo.id)}
                        >
                            <ClearIcon
                                fontSize="small"
                                color='primary'
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>)
            }
        </div>
    );
}

export default App;

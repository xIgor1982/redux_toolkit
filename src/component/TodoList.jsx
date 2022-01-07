import {Checkbox, Grid, Paper, Typography} from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleTodoComplete, removeTodo}) => {
    return todos.map(todo =>
        <TodoItem
            key={todo.id}
            {...todo}
            toggleTodoComplete={toggleTodoComplete}
            removeTodo={removeTodo}
        />
    )
}

export default TodoList
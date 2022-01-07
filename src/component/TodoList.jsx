import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

    return todos.map(todo =>
        <TodoItem
            key={todo.id}
            {...todo}
        />
    )
}

export default TodoList
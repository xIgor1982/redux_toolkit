import TodoItem from "./TodoItem";
import {useSelector} from 'react-redux'
import {getUseSelectorTodos} from "../store/getNameUseSelector";

const TodoList = () => {
    const todos = useSelector(getUseSelectorTodos)
    return todos.map(todo => <TodoItem key={todo.id} {...todo} /> )
}

export default TodoList
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoReducer/todoSlice";
import './App.css';
import {v4 as uuidv4} from 'uuid';
import TodoList from "./component/TodoList";
import InputField from "./component/InputField";

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    }

    return (
        <div className="App">
            <h1>Todo List</h1>
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTask}
                nameBtn={'Add Todo'}
            />
            <TodoList />
        </div>
    );
}

export default App;

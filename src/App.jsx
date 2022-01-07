import {useState} from "react";
import {useDispatch} from "react-redux";
import './App.css';
import TodoList from "./component/TodoList";
import InputField from "./component/InputField";
import {addTodo} from "./store/todoSlice";

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

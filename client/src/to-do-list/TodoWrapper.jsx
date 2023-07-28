import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";

function TodoWrapper () {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing:false },
            console.log(todos)
        ]);
    }

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}




export default TodoWrapper;
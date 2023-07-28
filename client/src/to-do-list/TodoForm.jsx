import React, {useState} from 'react';


//main component function that handles the state and the form
function TodoForm ({addTodo}) {

    const [value, setValue] = useState('')
//helper function that handles the submit event listener
    function handleSubmit(e) {
        //prevents the event listner from reloading the page every time
        e.preventDefault();
        //
        if (value) {
            addTodo(value);
            setValue('')
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="TodoForm">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}
                className="todo-input" placeholder="What is the task today?"/>
                <button type="submit" className='todo-btn'>Add Task</button>
            </form>
        </>
    )
}



export default TodoForm;





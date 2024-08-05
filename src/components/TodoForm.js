import React, { useState } from 'react'
import PropTypes from 'prop-types'

//proptypes check
TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

function TodoForm(props) {

    const [todoInput, setTodoInput] = useState("");
    // this is like model binding in vue
    function handleTodoChange(event) {
        event.preventDefault();
        setTodoInput(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        //block empty values
        if (todoInput.trim().length === 0) {
            return;
        }

        //process (function injected from parent component as prop)
        props.addTodo(todoInput);

        // clear last todo
        setTodoInput("");

    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <input type="text" value={todoInput} onChange={handleTodoChange} className="todo-input" placeholder='What do you want to do?' />
        </form>
    )
}

export default TodoForm
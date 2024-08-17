import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

TodoItemsRemaining.propTypes = {
    todos: PropTypes.array.isRequired
}
function TodoItemsRemaining(props) {
    // lifecycle hook for rfce
    useEffect(() => {
        console.log(
            "TodoItemsRemaining component generated"
        );
    });
    return (
        <span>{props.todos.filter((i) => !i.isComplete).length} items remaining</span>
    )
}

export default TodoItemsRemaining
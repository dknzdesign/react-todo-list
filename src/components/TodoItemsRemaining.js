import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

TodoItemsRemaining.propTypes = {
    todos: PropTypes.array.isRequired
}
function TodoItemsRemaining(props) {
    // lifecycle hook for rfce
    useEffect(() => {
        // console.log(
        //     "TodoItemsRemaining component generated"
        // );
    });
    function remainingCalculation() {
        console.log('lets imagine taht this is slow');
        return props.todos.filter((i) => !i.isComplete).length
    }
    //use memo cache the value and gives it something to trigger an update
    const remaining = useMemo(remainingCalculation, [props.todos]);// change object into an array litteral?
    return (
        <span>{remaining} items remaining</span>
    )
}

export default TodoItemsRemaining
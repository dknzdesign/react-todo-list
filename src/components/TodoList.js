import React from 'react'
import PropTypes from 'prop-types'
/**
 * Usage:
 *   <TodoList
            todos={todos}
            handleCompleted={handleCompleted}
            handleEditing={handleEditing}
            handleDelete={handleDelete}
            handleUpdateTodo={handleUpdateTodo}
          />
 */
//proptypes check
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleCompleted: PropTypes.func.isRequired,
    handleEditing: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdateTodo: PropTypes.func.isRequired,
}

function TodoList(props) {
    return (
        <>
            {/* Start fragment */}
            <ul className="todo-list">

                {
                    props.todos.map((todo, index) => (
                        <li key={todo.id} className={`todo-item-container ${todo.isComplete ? 'line-through' : ''}`}>
                            <div className="todo-item">
                                <input type="checkbox" onChange={() => props.handleCompleted(todo.id)} checked={todo.isComplete} />
                                {!todo.isEditing && (
                                    <span className="todo-item-label" onDoubleClick={() => props.handleEditing(todo.id)}>{todo.title}</span>
                                )}

                                {todo.isEditing && (
                                    <input className="todo-item-input" defaultValue={todo.title} autoFocus onBlur={(event) => props.handleUpdateTodo(event, todo.id)} onKeyDown={(event) => { if (event.key === 'Enter') { props.handleUpdateTodo(event, todo.id); } else if (event.key === 'Escape') { props.handleEditing(todo.id); } }} />
                                )}

                                <button className="x-button" onClick={() => props.handleDelete(todo.id)}>
                                    <svg
                                        className="x-button-icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))
                }

            </ul>

            {/* Check all actions */}
            <div className="check-all-container">
                <div>
                    <div className="button">Check All</div>
                </div>

                <span>{props.todos.length} items remaining</span>
            </div>
            {/* Filter Buttons */}
            <div className="other-buttons-container">
                <div>
                    <button className="button filter-button filter-button-active">
                        All
                    </button>
                    <button className="button filter-button">Active</button>
                    <button className="button filter-button">Completed</button>
                </div>
                <div>
                    <button className="button">Clear completed</button>
                </div>
            </div>
            {/* end Fragment */}
        </>
    )
}

export default TodoList
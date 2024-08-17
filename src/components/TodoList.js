import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoItemsRemaining from './TodoItemsRemaining'
import ClearCompleted from './ClearCompleted';
import TodoCompleteAll from './TodoCompleteAll'
import TodoFilters from './TodoFilters';
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
    setTodos: PropTypes.func.isRequired,
}

function TodoList(props) {
    const [filter, setFilter] = useState('all');
    function clearCompleted() {
        const completed = props.todos.filter((el) => !el.isComplete);
        props.setTodos(completed);
    }

    function completeAllTodos() {
        const newTodos = props.todos.map((el) => { el.isComplete = true; return el; });
        props.setTodos(newTodos);
    }

    function todosFiltered(filter = 'all') {
        switch (filter) {
            case 'active':
                return props.todos.filter((el) => !el.isComplete);
            case 'completed':
                return props.todos.filter((el) => el.isComplete);
            default://all
                return props.todos;
        }
    }
    return (
        <>
            {/* Start fragment */}
            <ul className="todo-list">

                {
                    todosFiltered(filter).map((todo, index) => (
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
                    <TodoCompleteAll completeAllTodos={completeAllTodos} />
                </div>

                <TodoItemsRemaining todos={props.todos} />
            </div>
            {/* Filter Buttons */}
            <div className="other-buttons-container">
                <TodoFilters filter={filter} setFilter={setFilter} />
                <div>
                    <ClearCompleted clearCompleted={clearCompleted} />
                </div>
            </div>
            {/* end Fragment */}
        </>
    )
}

export default TodoList
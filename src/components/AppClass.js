import '../App.css';
import React, { Component } from 'react'
// old school class component based 
// STATEFULL REACT COMPONENT
export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'Finish this app!',
                    isComplete: false
                },
                {
                    id: 2,
                    title: 'Publish on Github',
                    isComplete: false
                },
                {
                    id: 3,
                    title: 'Fend off recruiters wanting to hire me.',
                    isComplete: false
                }
            ]
        }
    }
    addTodo = (event) => {


        const newTodo = {
            id: 4,
            title: 'Class based components',
            isComplete: false
        };
        this.setState(oldstate => {
            return { todos: [...oldstate.todos, newTodo] }

        });

    }
    render() {
        return (
            <div className="todo-app-container">
                <div className="todo-app">
                    <h2>To Do</h2>

                    <form action="#" onSubmit={this.addTodo}>
                        <input type="text" className="todo-input" placeholder='What do you want to do?' />
                    </form>
                    {/* Todo List */}
                    <ul className="todo-list">

                        {
                            this.state.todos.map((todo, index) => (
                                <li key={todo.id} className="todo-item-container">
                                    <div className="todo-item">
                                        <input type="checkbox" />
                                        <span className="todo-item-label">{todo.title}</span>
                                        <button className="x-button">
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

                        <span>3 items remaining</span>
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

                </div>
            </div>
        )
    };
}



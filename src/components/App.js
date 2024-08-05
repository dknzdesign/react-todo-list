import '../App.css';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish this app!',
      isComplete: false,
      isEditing: false
    },
    {
      id: 2,
      title: 'Publish on Github',
      isComplete: false,
      isEditing: false
    },
    {
      id: 3,
      title: 'Fend off recruiters wanting to hire me.',
      isComplete: false,
      isEditing: false
    }
  ]);
  const addTodo = (event) => {

    // empty string filter
    if (todoInput.trim().length === 0) {
      return;
    }
    const newTodo = {
      id: currentId,
      title: todoInput,
      isComplete: false,
      isEditing: false
    };
    //console.log(event.target);
    setCurrentId((id) => id + 1);
    setTodos([...todos, newTodo]);

  }

  const [todoInput, setTodoInput] = useState("");

  // this is like model binding in vue
  function handleTodoChange(event) {
    event.preventDefault();
    setTodoInput(event.target.value);
  }

  const [currentId, setCurrentId] = useState(4);
  function handleDelete(id) {
    console.log('deleting: ', id);
    setTodos([...todos].filter((todo) => todo.id !== id))
  }
  function handleCompleted(id) {
    let newstate = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;//toggle
      }
      return todo;
    });
    setTodos(
      newstate
    );
  }
  function handleEditing(id) {
    console.log('Editing mode for :', id);
    let newstate = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;//toggle
      }
      return todo;
    });
    setTodos(
      newstate
    );
  }
  function handleUpdateTodo(event, id) {
    // empty string filte

    let newstate = todos.map((todo) => {
      if (todo.id === id) {
        // if empty return old value
        if (event.target.value.trim().length === 0) {
          console.log('empty values not permitted');
        } else {
          todo.title = event.target.value;

        }
        todo.isEditing = !todo.isEditing;//toggle editing and grab event

      }
      return todo;
    });
    setTodos(
      newstate
    );
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>To Do</h2>

        <form action="#" onSubmit={addTodo}>
          <input type="text" value={todoInput} onChange={handleTodoChange} className="todo-input" placeholder='What do you want to do?' />
        </form>
        {/* Todo List */}
        <ul className="todo-list">

          {
            todos.map((todo, index) => (
              <li key={todo.id} className={`todo-item-container ${todo.isComplete ? 'line-through' : ''}`}>
                <div className="todo-item">
                  <input type="checkbox" onChange={() => handleCompleted(todo.id)} checked={todo.isComplete} />
                  {!todo.isEditing && (
                    <span className="todo-item-label" onDoubleClick={() => handleEditing(todo.id)}>{todo.title}</span>
                  )}

                  {todo.isEditing && (
                    <input className="todo-item-input" defaultValue={todo.title} autoFocus onBlur={(event) => handleUpdateTodo(event, todo.id)} onKeyDown={(event) => { if (event.key === 'Enter') { handleUpdateTodo(event, todo.id); } else if (event.key === 'Escape') { handleEditing(todo.id); } }} />
                  )}

                  <button className="x-button" onClick={() => handleDelete(todo.id)}>
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

          <span>{todos.length} items remaining</span>
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
    </div >
  );
}

export default App;

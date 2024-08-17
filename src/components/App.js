import '../App.css';
import { useState } from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish this app',
      isComplete: false,
      isEditing: false
    },
    {
      id: 2,
      title: 'Publish on Github',
      isComplete: true,
      isEditing: false
    },
    {
      id: 3,
      title: 'Fend off recruiters wanting to hire me.',
      isComplete: false,
      isEditing: false
    }
  ]);
  const addTodo = (taskText) => {
    const newTodo = {
      id: currentId,
      title: taskText,
      isComplete: false,
      isEditing: false
    };
    //console.log(event.target);
    setCurrentId((id) => id + 1);
    setTodos([...todos, newTodo]);

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
        <h1>To Do List</h1>

        <TodoForm addTodo={addTodo} />
        {/* Todo List */}
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            handleCompleted={handleCompleted}
            handleEditing={handleEditing}
            handleDelete={handleDelete}
            handleUpdateTodo={handleUpdateTodo}
            setTodos={setTodos}
          />

        ) : (
          <NoTodos />
        )
        }

      </div>
    </div >
  );
}

export default App;

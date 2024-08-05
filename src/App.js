import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>To Do</h2>

        <form action="">
          <input type="text" className="todo-input" placeholder='What do you want to do?' />
        </form>

        <ul className="todo-list">
          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label">Something urgent</span>
              <button className='x-button'></button>
            </div>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default App;

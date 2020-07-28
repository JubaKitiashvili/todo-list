import React from 'react';
import './components/TodoList.js';
import './components/TodoInput.js';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';

function App() {
  return (
    <div>
      <div className="container">
        <div className="dow">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

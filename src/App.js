import React, { Component } from 'react';
import './components/TodoList.js';
import './components/TodoInput.js';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';

class App extends Component {
  state = {
    items: [
      { id: 1, title: 'wake up' },
      { id: 2, title: 'make breakfast' },
    ],
    id: uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    console.log('handleChange');
  };
  handleSubmit = (e) => {
    console.log('handleSubmit');
  };
  clearList = () => {
    console.log('clearList');
  };
  handleDelete = (id) => {
    console.log(`handle delate ${id}`);
  };
  handleEdit = (id) => {
    console.log(`edit ${id}`);
  };

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <div className="dow">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editor={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

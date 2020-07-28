import React, { Component } from 'react';
import './components/TodoList.js';
import './components/TodoInput.js';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.title,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: '',
        id: uuid(),
        editItem: false,
      },
      () => console.log(this.state)
    );
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

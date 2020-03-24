import React, { Component } from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

export default class App extends Component {

  startId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Create React App', important: true, id: 2 },
      { label: 'Have a Lunch', important: false, id: 3 },
    ]
  }
  


  addItem = (text) => {
    this.setState(
      ({ todoData }) => {
        const newItem = {
          label: text,
          important: false,
          id: this.startId++,
        };

        const newArray = [...todoData, newItem];
        return { todoData: newArray };
      }
    );
  };

  deleteItem = (id) => {
    this.setState(
      ({ todoData }) => {
        const newArray = todoData.filter((item) => item.id !== id);
        return { todoData: newArray }
      }
    );
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className='todo-app'>
        <AppHeader />
        <ItemStatusFilter />
        <ItemAddForm
          onAdd={this.addItem} />
        <div className='top-panel d-flex'>
          <SearchPanel />

        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
        />


      </div>
    );
  };
}


import React, { Component } from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Create React App', important: true, id: 2 },
      { label: 'Have a Lunch', important: false, id: 3 },
    ]
  }

  deleteItem = (id) => {
    this.setState(
      ({ todoData }) => {
        console.log(todoData)
        const newArray = todoData.filter((item) => item.id !== id);
        console.log("App -> deleteItem -> newArray", newArray)
        // return newArray;
        return {todoData: newArray}
      }
    );
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className='todo-app'>
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
        />
      </div>
    );
  };
}

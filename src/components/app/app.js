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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create React App'),
      this.createTodoItem('Have a Lunch'),
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.startId++,
      isDone: false,
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'isDone'),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(
      ({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'isImportant'),
        };
      });
  };

  addItem = (label) => {
    this.setState(
      ({ todoData }) => {
        const newItem = this.createTodoItem(label);
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

    const doneCount = todoData.filter((item) => item.isDone).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <ItemStatusFilter />
        <ItemAddForm
          onAdd={this.addItem} />
        <div className='top-panel d-flex'>
          <SearchPanel />

        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />


      </div>
    );
  };
}


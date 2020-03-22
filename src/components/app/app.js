import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1}, 
    {label: 'Create React App', important: true, id: 2}, 
    {label: 'Have a Lunch', important: false, id: 3}, 
  ]



  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter/>
      <TodoList todos={todoData}/>
    </div>
  )
}

export default App;



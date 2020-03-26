import React, {Component} from 'react';

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
        ],
        term: '',
        filter: 'all', //all, active, done
    };

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
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'isDone'),
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(
            ({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'isImportant'),
                };
            });
    };

    addItem = (label) => {
        this.setState(
            ({todoData}) => {
                const newItem = this.createTodoItem(label);
                const newArray = [...todoData, newItem];
                return {todoData: newArray};
            }
        );
    };

    deleteItem = (id) => {
        this.setState(
            ({todoData}) => {
                const newArray = todoData.filter((item) => item.id !== id);
                return {todoData: newArray}
            }
        );
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(
            (item) => item.label
                .toLowerCase()
                .includes(term.toLowerCase())
        );
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.isDone);
            case 'done':
                return items.filter((item) => item.isDone);
            default:
                return items;
        }
    };

    render() {
        const {todoData, term, filter} = this.state;

        const visibleItems = this.filter(
            this.search(todoData, term), filter);
        const doneCount = todoData.filter((item) => item.isDone).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}/>

                <div className='top-panel d-flex'>
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>

                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    };
}

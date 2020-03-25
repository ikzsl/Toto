import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {
            label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            isDone,
            isImportant
        } = this.props;

        let classNameDone = isDone ? 'done' : null;
        let classNameImportant = isImportant ? 'important' : null;

        return (
            <span className={`todo-list-item ${classNameDone} ${classNameImportant}`}>
                <span
                    className='todo-list-item-label'
                    onClick={onToggleDone}>
                    {label}
                </span>
                <span>
                    <button
                        type='button'
                        onClick={onToggleImportant}
                        className='btn btn-outline-success btn-sm float-right '>
                        <i className='fa fa-exclamation' />
                    </button>
                    <button
                        type='button'
                        onClick={onDeleted}
                        className='btn btn-outline-success btn-sm fa'>
                        <i className='fa fa-trash-o' style={{ color: "red" }} />
                    </button>
                </span>
            </span >
        );
    };
}
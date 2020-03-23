import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

     

    state = {
        done: false,
        important: false,
    };

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done,
            }
        });
    };

    onImportantClick = () => {
        this.setState(({ important }) => {
            return {
                important: !important,
            }
        });
    };

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNameDone = done ? 'done' : null;
        let classNameImportant = important ? 'important' : null;

        return (
            <span className={`todo-list-item ${classNameDone} ${classNameImportant}`}>
                <span
                    className='todo-list-item-label'
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <span>
                    <button
                        type='button'
                        onClick={this.onImportantClick}
                        className='btn btn-outline-success btn-sm float-right '>
                        <i className='fa fa-exclamation' />
                    </button>
                    <button
                        type='button'
                        onClick={onDeleted}
                        className='btn btn-outline-success btn-sm fa'>
                        <i className='fa fa-trash-o' />
                    </button>
                </span>
            </span >
        );
    };
}
import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'tomato' : 'black',
    }

    return (
        <span>
            <span className='todo-list-item'
                style={style}>
                {label}
            </span>

            <button type='button' className='btn btn-outline-success btn-sm fa '>
                <i className='fa fa-exclamation' />

            </button>
            <button type='button' className='btn btn-outline-success btn-sm fa'>
                <i className='fa fa-trash-o' />

            </button>

        </span >

    );
};

export default TodoListItem;
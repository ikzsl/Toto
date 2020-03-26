import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: '',
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term)
    };


    render() {
        const searchText = 'searchText';
        const searchstyle = {
            fontSize: '25px'
        };
        return (
            <input
                type="text"
                className='search-input form-control'
                style={searchstyle} placeholder={searchText}
                disabled={false}
                onChange={this.onSearchChange}
                value={this.state.term}/>
        );
    }
};

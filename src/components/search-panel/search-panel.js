import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const searchText = 'searchText';
    const searchstyle = {
      fontSize: '25px'
    }
    return <input className='search-input form-control' style={searchstyle} placeholder={searchText} disabled={false}/>
  };

  export default SearchPanel;
import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const searchText = 'searchText1111';
    const searchstyle = {
      fontSize: '25px'
    }
    return <input className='search-input' style={searchstyle} placeholder={searchText} disabled={false}/>
  };

  export default SearchPanel;
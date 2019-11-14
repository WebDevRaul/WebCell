import React from 'react';
import PropTypes from 'prop-types';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const Search = () => {
  return (
    <div className='search'>
      <div className='search-icon'>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classesName='input'
      />
    </div>
  )
}

Search.propTypes = {

}

export default Search;
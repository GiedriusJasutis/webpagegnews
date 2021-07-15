import './search.scss';
import React from 'react';
import { Button, TextInput } from 'carbon-components-react';

function Search({ onchange, onclick, searchKeyword, error }) {
  return (
    <>
      <div className='alert'>{error && <p>{error}</p>}</div>
      <div className='search mt-1'>
        <div className='search__input-group'>
          <TextInput
            placeholder='Search article'
            size='lg'
            labelText=''
            id='searchText'
            onChange={(e) => onchange(e)}
            value={searchKeyword}
          />
          <Button id='search-button' kind='primary' onClick={onclick}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
}

export default Search;

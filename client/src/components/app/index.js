import './app.scss';
import React, { useState } from 'react';
import Header from '../header';
import Search from '../search';
import CardList from '../card';
import { ClipLoader } from 'react-spinners';
import { useFetchNews, useFetchDetails } from '../../hooks/useFetch';
import Aside from '../aside';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [details, setDetails] = useState(null);

  const { loading, error, news } = useFetchNews(
    'http://localhost:5000/api/gnews',
    searchTerm
  );

  const { detailsResponse } = useFetchDetails(
    'http://localhost:5000/api/details',
    details
  );

  // onChange input data
  const searchKeywordHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  // set searchTerm and get api data after button clicked
  const searchKeywordHandlerSubmit = () => {
    setSearchTerm(searchKeyword);
  };

  // click card
  const clickCardHandler = (url, details) => {
    // every card click url as description will be saved to db
    setDetails(details);

    // open new window and load page
    window.open(url, '_blank');
  };

  return (
    <div className='container'>
      <Header title={'Gnews'} />
      <Aside detailsResponse={detailsResponse} searchKeyword={searchKeyword} />
      <Search
        error={error}
        onchange={searchKeywordHandler}
        onclick={searchKeywordHandlerSubmit}
        searchKeyword={searchKeyword}
      />
      {news && <CardList news={news} onclick={clickCardHandler} />}
      <div className='loader'>
        {loading && <ClipLoader loading></ClipLoader>}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const useFetchNews = (url, searchTerm) => {
  const [state, setState] = useState({
    loading: false,
    error: '',
    news: null,
  });

  const isMounted = useRef(false);
  // fetch news by searchKeyword
  useEffect(() => {
    // initial render, do not run api call
    if (isMounted.current) {
      setState({
        loading: true,
        error: '',
      });
      axios
        .post(url, {
          searchKeyword: searchTerm,
        })
        .then((response) => {
          // check response object if contains error property
          const [errors] = Object.keys(response.data);
          // validation errors
          if (errors === 'errors') {
            setState({
              loading: false,
              error: response.data.errors[0].msg,
            });
          } else {
            // if response empty array
            if (response.data.articles.length === 0) {
              setState({
                error: 'try searching by other words',
                news: null,
                loading: false,
              });
              return;
            }

            // set 9 items in news array
            let shortenNews = response.data.articles.slice(0, 9);

            // add uuid to each card item
            const shortenNewsId = shortenNews.map((item) => {
              return { ...item, id: uuidv4() };
            });

            // data arrived succesfully. Set data, clean errors, disable loading
            console.log('fetching data...');

            setState({
              news: shortenNewsId,
              loading: false,
              error: '',
            });
          }
        })
        .catch((error) => {
          // request errors
          if (!error) {
            setState({
              error: error.response.data.errors[0].msg,
              loading: false,
            });
            // if error object null but still you have error (internal server error)
          } else {
            setState({
              error: 'It looks that data can not reach you',
              loading: false,
            });
          }
        });
    } else {
      isMounted.current = true;
    }
  }, [searchTerm]);

  return state;
};

function useFetchDetails(url, details) {
  const [detailsResponse, setDetailsResponse] = useState(null);
  const [error, setError] = useState(null);
  // save details if card was clicked
  useEffect(() => {
    if (details) {
      axios
        .post(url, {
          details,
        })
        .then((response) => {
          setDetailsResponse(response.data); //msg
        })
        .catch((err) => {
          setError(err);
          setError(err);
        });
    }
  }, [details]);

  return {
    detailsResponse,
    detailsError: error,
  };
}

export { useFetchNews, useFetchDetails };

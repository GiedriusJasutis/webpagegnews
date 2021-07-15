import './card.scss';
import React from 'react';
import CardList from './CardList';
import PropTypes from 'prop-types';

function Card({ news, onclick }) {
  return <CardList data={news} onclick={onclick} />;
}

Card.defaultProps = {
  data: [],
  onclick: () => {
    console.log('No click handler provided');
  },
};

Card.propTypes = {
  data: PropTypes.array.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Card;

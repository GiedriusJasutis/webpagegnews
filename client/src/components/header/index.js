import './header.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header className='header'>
      <h2 className='p-2' data-testid='header'>
        {title}
      </h2>
    </header>
  );
}

Header.defaultProps = {
  title: 'Gnews',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

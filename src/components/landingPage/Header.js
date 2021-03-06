import React from 'react';
import PropTypes from 'prop-types';
import styles from '../landingPage/styles/Header.css';


const Header = ({ name, title }) => {
  return (
    <>
     
      <header className={styles.Header}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </header>
    </>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
};
  
export default Header;

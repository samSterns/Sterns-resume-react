import React from 'react';
import PropTypes from 'prop-types';
import styles from '../resume/styles/Header.css';
import NavBar from '../resume/NavBar';

const Header = ({ name, title }) => {
  return (
    <>
      <NavBar />
      <header className={styles.Header}>
        <h1>{name}</h1>
        <h4>{title}</h4>
      </header>
    </>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
};
  
export default Header;

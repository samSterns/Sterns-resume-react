import React from 'react';
import PropTypes from 'prop-types';
import styles from '../resume/styles/Header.css';

const Header = ({ name, title }) => {
  return (
    <>
      <header className={styles.Header}>{name}</header>
      <h2>{title}</h2>
    </>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
};
  
export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/resume/styles/LeftBox.css';

const LeftBox = ({ title }) => {
  return (
    <LeftBox className={styles.LeftBox}>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </LeftBox>
  );
};

LeftBox.propTypes = {
  title: PropTypes.string
};
  
export default LeftBox;

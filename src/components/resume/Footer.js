import React from 'react';
import PropTypes from 'prop-types';
import styles from '../resume/styles/Footer.css';
// import { FaFileDownload, GoMarkGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <>
      <footer className={styles.Footer} >
        <div>
          {/* <button>Go</button> */}
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {         
  FaFileDownload: PropTypes.symbol,
  GoMarkGithub: PropTypes.symbol
};
  
export default Footer;

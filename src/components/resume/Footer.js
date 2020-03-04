import React from 'react';
import styles from '../resume/styles/Footer.css';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <>
      <footer className={styles.Footer} >
        <FaFileDownload alt="click to download my resume" className={styles.iconFile} size={32}/>
        <a href={'https://github.com/samSterns'}>
          <FaGithub alt="click to Visit my git hub" className={styles.iconGit} size={32}/>
        </a>
        <a href={'https://www.linkedin.com/in/samsterns/'}>
          <FaLinkedin alt="click to Visit my Linked In" className={styles.iconLin} size={32}/>
        </a>
      </footer>
    </>
  );
};

export default Footer;

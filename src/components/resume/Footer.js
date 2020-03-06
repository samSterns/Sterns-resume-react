import React from 'react';
import styles from '../resume/styles/Footer.css';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {

  const downloadResume = () => {
    window.location.href = 'https://samgsterns.com./src/components/styles/assets/SamSternsResume.pdf';
  };

  return (
    <>
      <footer className={styles.Footer} >
        <form>
          <button onClick={downloadResume}>
            <FaFileDownload alt="click to download my resume" className={styles.icon} size={36}/>
          </button>
        </form>
        <a href={'https://github.com/samSterns'}>
          <FaGithub alt="click to Visit my git hub" className={styles.icon} size={36}/>
        </a>
        <a href={'https://www.linkedin.com/in/samsterns/'}>
          <FaLinkedin alt="click to Visit my Linked In" className={styles.icon} size={36}/>
        </a>
      </footer>
    </>
  );
};

export default Footer;

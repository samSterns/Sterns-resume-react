import React from 'react';
import styles from '../resume/styles/Footer.css';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'; 
// import resume from '../resume/styles/assets/SamSternsResume.pdf';

const Footer = () => {

  // const downloadResume = () => {
  //   window.location.href = 'https://drive.google.com/drive/u/0/folders/1QGkbGnFd-RAShYEGxtdjsRWtI8vyHoHN';
  // };

  return (
    <>
      <footer className={styles.Footer} >
        <a target="blank" href={resume} >
          <button >
            <FaFileDownload alt="click here to download my resume" className={styles.icon} size={36}/>
          </button>
        </a>
        <a href={'https://github.com/samSterns'}>
          <FaGithub alt="click here to Visit my git hub" className={styles.icon} size={36}/>
        </a>
        <a href={'https://www.linkedin.com/in/samsterns/'}>
          <FaLinkedin alt="click here to Visit my Linked In" className={styles.icon} size={36}/>
        </a>
      </footer>
    </>
  );
};

export default Footer;

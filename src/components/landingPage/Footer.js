import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md';
import IconButton from '@material-ui/core/IconButton';

import styles from '../landingPage/styles/Footer.css';

const Footer = () => {
  return (
    <>
      <div className={styles.Toolbar}>
        <BottomNavigation >
          <IconButton className={styles.NavItem}>    
            <a href={'https://github.com/samSterns'}>
              <FaGithub alt="click here to Visit my git hub" className={styles.icon} size={36}/>
            </a></IconButton>
          <IconButton className={styles.NavItem}>
            <a href={'https://www.linkedin.com/in/samsterns/'}>
              <FaLinkedin alt="click here to Visit my Linked In" className={styles.icon} size={36}/>
            </a>
          </IconButton>
          <IconButton className={styles.NavItem}>    
            <a href={'https://github.com/samSterns'}>
              <MdEmail alt="click here to email me" className={styles.icon} size={36}/>
            </a>
          </IconButton>
          <IconButton className={styles.NavItem}>    
            <a href={'https://github.com/samSterns'}>
              <FaFileDownload alt="click here to download my resume" className={styles.icon} size={36}/>
            </a>
          </IconButton>
        </BottomNavigation >
      </div>
    </>
  );
};

export default Footer;


import React from 'react';
import styles from '../landingPage/styles/NavBar.css';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

const NavBar = () => {

  return (
    <>
      <Toolbar className={styles.Bar}>
        {/* <IconButton className={styles.NavItem}><a href="#about">About</a></IconButton>
        <IconButton className={styles.NavItem}><a href="#projects">Projects</a></IconButton> */}
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
      </Toolbar>
    </>
  );
};

export default NavBar;

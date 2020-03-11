import React from 'react';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import styles from '../landingPage/styles/NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import style from './styles/NavBar.css';

const NavBar = () => {



  return (
    <>
      <AppBar position="static" className={styles.NavBar} >
        <Toolbar className={styles.InternalLinks} >
          <Typography><a href="#about">About</a></Typography>
          <Typography><a href="#projects">Projects</a></Typography>
          <Typography><a href="#experience">Experience</a></Typography>
          <Typography><a href="#contact">Contact</a></Typography>
          {/* <Typography> 
            <button >
              <FaFileDownload alt="click here to download my resume" className={styles.icon} size={36}/>
            </button>
          </Typography> */}
          <IconButton>    <a href={'https://github.com/samSterns'}>
            <FaGithub alt="click here to Visit my git hub" className={styles.icon} size={36}/>
          </a></IconButton>
          <IconButton>
            <a href={'https://www.linkedin.com/in/samsterns/'}>
              <FaLinkedin alt="click here to Visit my Linked In" className={styles.icon} size={36}/>
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
